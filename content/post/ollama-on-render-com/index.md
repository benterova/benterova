+++
title = 'Deploying ollama on Render.com Private Services'
description = "A short guide on running ollama Docker image on Render.com private services, and connecting to it from your application"
date = 2024-04-29
image = "render.png"
draft = false
keywords = 'ollama,docker,render,deployment,development'
+++

# Deploying ollama on Render.com Private Services

I've been working on my resume and cover letter optimization application [betterjob.app](https://betterjob.app), and I wanted to switch from ChatGPT to a private service running [ollama](https://github.com/ollama/ollama) to have more control over my models, parameters, and potentially even costs? (I might update this post with information relating to potential cost savings after I've run some tests. Might end up being more expensive for my use case though.)

The provided Dockerfile works, however it doesn't come with any models preinstalled. We'll need to modify the Dockerfile of the ollama build process to download llama3 after the container has finished building.

### ollama Directory

First, I created a new directory in my application's repo root called "ollama", which will contain the Dockerfile, entrypoint script, as well as other ollama specific files we'll need, such as a Modelfile to later modify the behavior of our model.

Within the `ollama/Dockerfile` I placed the following I found someplace on Github. I lost it, but if I find it I'll update the link here.

```dockerfile
# Stage 1: Build the binary
FROM golang:alpine AS builder

# Install required dependencies
RUN apk add --no-cache git build-base cmake bash

# Set the working directory within the container
WORKDIR /app

# Clone the source code from the GitHub repository
RUN git clone https://github.com/jmorganca/ollama.git .

# Build the binary with static linking
RUN go generate ./... \
    && go build -ldflags '-linkmode external -extldflags "-static"' -o .

# Stage 2: Create the final image
FROM alpine

ENV OLLAMA_HOST "0.0.0.0"

# Install required runtime dependencies
RUN apk add --no-cache libstdc++ curl

# NOTE: UNCOMMENT THIS IF YOU'RE CHANGING THE MODELFILE
# COPY Modelfile /Modelfile

# Copy the custom entry point script into the container
COPY entrypoint.sh /entrypoint.sh

# Make the script executable
RUN chmod +x /entrypoint.sh

# Create a non-root user
ARG USER=ollama
ARG GROUP=ollama
RUN addgroup $GROUP && adduser -D -G $GROUP $USER

# Copy the binary from the builder stage
COPY --from=builder /app/ollama /bin/ollama

USER $USER:$GROUP

ENTRYPOINT ["/entrypoint.sh"]
```

Afterwards, we'll need to make the file `ollama/entrypoint.sh` with this content:

```bash

#!/bin/sh

./bin/ollama serve &

sleep 5

curl -X POST http://localhost:11434/api/pull -d '{"name": "llama3"}'

sleep 10

tail -f /dev/null

```

Render.com's private services don't have any GPU's to utilize, and this Dockerfile doesn't install any dependencies for being GPU accelerated.

If you're going to be using a different Modelfile, be sure to uncomment line 26 of `ollama/Dockerfile` and make the file `ollama/Modelfile` with the [desired alterations.](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)

### Blueprint File
I'm using the [Render Blueprint YAML](https://docs.render.com/blueprint-spec) to define and build my services through code. To create the private service that will be running the ollama Docker image, I added the following to my `render.yaml` file:

```yaml
  - type: pserv
    name: your-app-ollama
    region: oregon
    runtime: docker
    dockerContext: ./ollama
    dockerfilePath: ./ollama/Dockerfile
    plan: starter
```

With this setup, Render will pull the ollama image (It appears that Render already has this cached as well, so deployment is very quick), autodetect the port and finalize deploying the image.

To access the created ollama service in our main application, we can [reference the host from our ollama server](https://docs.render.com/blueprint-spec#referencing-values-from-other-services) in our main application's environment variables, like so:

```yaml
envVars:
  - key: OLLAMA_URL
    fromService:
      name: your-app-ollama
      type: pserv
      property: hostport
```

The property `hostport` will be a string that's the host and the port separated by a colon that you can then reference in your application's code by accessing the environment variables.

In my Rails application, I added a config option that was the content of the environment variable, or localhost for my development environment.

`config/application.rb`:
```ruby
config.ollama_url = ENV.fetch("OLLAMA_URL", "localhost:11434")
```

And that's all! Now I can use `Rails.configuration.ollama_url` wherever I need to access the ollama instance.

I'm using the [ruby-openai](https://github.com/alexrudall/ruby-openai?tab=readme-ov-file#ollama) gem to handle the communication between my Rails application and the ollama instance, and supporting this is also very straightforward as you only have to include this newly created configuration variable when initializing the client:

```ruby
client = OpenAI::Client.new(
        uri_base: "http://#{Rails.configuration.ollama_url}",
      )
```

Hope this helped someone implement this setup quickly! 

I like having control of the models I want to run, and this will allow me a lot of flexibility to tailor my parameters to my use case.

---

## Configuring VSCode Devcontainers

With the `ollama` directory being in the root of our repo, we're able to share the same Dockerfile between our VSCode dev container and Render.com to ensure that we're always running the same as what's running in production.

I'm using the Docker compose container-to-container networking mode, and within `.devcontainer/docker-compose.yml` I've added the following:

```yaml
services:
  ollama:
    network_mode: service:app
    build:
      context: ../ollama
      dockerfile: Dockerfile
    volumes:
      - ollama_data:/app
```

With this setup you'll have `localhost:11434` be the location of the server within your development container, and the Rails specific method mentioned to access this instance should work out of the box for you.
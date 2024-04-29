+++
title = 'Deploying ollama on Render.com Private Services'
description = "A short guide on running ollama Docker image on Render.com private services, and connecting to it from your application"
date = 2024-04-29
image = render.png
draft = false
keywords = 'ollama,docker,render,deployment,development'
+++

# Deploying ollama on Render.com Private Services

I've been working on my resume and cover letter optimization application [betterjob.app](https://betterjob.app), and I wanted to switch from ChatGPT to a private service running [ollama](https://github.com/ollama/ollama) to have more control over my models, parameters, and potentially even costs? (I might update this post with information relating to potential cost savings after I've run some tests. Might end up being more expensive for my use case though.)

Thanks to the Dockerfile found within the ollama repository, deploying to Render is very easy.

### Blueprint File
I'm using the [Render Blueprint YAML](https://docs.render.com/blueprint-spec) to define and build my services through code. To create the private service that will be running the ollama Docker image, I added the following to my `render.yaml` file:

```yaml
  - type: pserv
    name: your-app-ollama
    region: oregon
    runtime: image
    image:
      url: docker.io/ollama/ollama
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
        uri_base: Rails.configuration.ollama_url,
      )
```

Hope this helped someone implement this setup quickly! 

I like having control of the models I want to run, and this will allow me a lot of flexibility to tailor my parameters to my use case.
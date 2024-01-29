<script lang="ts">
  import Fa from "svelte-fa";

  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

  export let showBackground: boolean = false;

  const toggleBackground = () => {
    showBackground = !showBackground;
  };
</script>

<div class="hero is-primary is-medium">
  <article class="message">
    <div class="message-body">
      <p>
        <strong>Notice:</strong> This site is a work in progress, and is currently
        intended only to house a collection of the projects I've worked on.
      </p>
    </div>
  </article>
  <div class="hero-body">
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title">Ben Terova</h1>
        <h2 class="subtitle">
          Senior Software Engineer | Full Stack Developer | ❤️ Ruby
        </h2>
        <div
          class="has-text-centered"
          style="display: flex; justify-content: center; gap: 1rem;"
        >
          <h3><a href="mailto:ben@benterova.com">ben@benterova.com</a></h3>

          <a
            href="https://github.com/benterova"
            target="_blank"
            rel="noreferrer"
          >
            <span class="icon">
              <Fa icon={faGithub} size="lg" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/benterova/"
            target="_blank"
            rel="noreferrer"
          >
            <span class="icon">
              <Fa icon={faLinkedin} size="lg" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/nuclear/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import ChatSection from "./lib/sections/ChatSection.svelte";
  import StarfieldScene from "./lib/starfield/StarfieldScene.svelte";
  import TodoSection from "./lib/todo/TodoSection.svelte";
</script>

<main>
  <!-- <Navbar /> -->
  <div class="container is-fluid">
    <Header showBackground>
      <StarfieldScene />
    </Header>
    <div class="block">
      <h1 class="title has-text-centered m-6">Example Projects</h1>
      <p class="subtitle has-text-centered">
        This is a collection of example projects that I have created to
        demonstrate different aspects of web development.
      </p>
    </div>
    <div class="is-divider" />
    <ChatSection />
    <div class="is-divider" />
    <TodoSection />
  </div>
</main>

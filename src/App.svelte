<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/nuclear/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import WorkSection from "./lib/sections/WorkSection.svelte";
  import Scene from "./lib/starfield/Scene.svelte";
  import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
</script>

<svelte:head>
  <title>Ben Terova</title>
</svelte:head>
<main>
  <!-- <Navbar /> -->
  <div class="container is-fluid">
    <Header showBackground>
      <Scene />
    </Header>
    <WorkSection />
    <ProjectsSection />
  </div>
</main>

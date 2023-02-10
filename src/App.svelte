<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/nuclear/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import WorkSection from "./lib/sections/WorkSection.svelte";
  import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import HeaderCanvas from "./lib/starfield/HeaderCanvas.svelte";
  import IntroSection from "./lib/sections/IntroSection.svelte";

  const pageTitle = "Ben Terova";
  let title;

  setInterval(() => {
    title = pageTitle + (document.title.endsWith("|") ? "" : "|");
  }, 1000);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<main>
  <Navbar />
  <Header showBackground>
    <HeaderCanvas />
  </Header>
  <div class="container">
    <IntroSection />
    <WorkSection />
    <ProjectsSection />
  </div>
</main>

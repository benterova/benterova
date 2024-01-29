<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/materia/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import WorkSection from "./lib/sections/WorkSection.svelte";
  import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
  const pageTitle = "Ben Terova";
  let title = pageTitle;

  setInterval(() => {
    title = pageTitle + (document.title.endsWith("|") ? "" : "|");
  }, 1000);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<main>
  <Header />
  <div class="container">
    <WorkSection />
    <ProjectsSection />
  </div>
</main>

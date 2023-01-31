<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/nuclear/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import ChatSection from "./lib/sections/ChatSection.svelte";
  import StarfieldScene from "./lib/starfield/StarfieldScene.svelte";
</script>

<main>
  <Navbar />
  <div class="container">
    <Header showBackground>
      <StarfieldScene />
    </Header>
    <ChatSection />
  </div>
</main>

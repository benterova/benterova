<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import "bulmaswatch/nuclear/bulmaswatch.min.css";

  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import ChatSection from "./lib/sections/ChatSection.svelte";
</script>

<main>
  <Navbar />
  <div class="container">
    <Header />
    <ChatSection />
  </div>
</main>

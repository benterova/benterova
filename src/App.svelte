<script lang="ts">
  import "bulma/css/bulma.css";
  import ChatSection from "./lib/ChatSection.svelte";

  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<main class="container">
  <Navbar />
  <Header />

  <div id="chat-section">
    <ChatSection />
  </div>
</main>

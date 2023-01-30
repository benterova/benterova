<script lang="ts">
  import "bulma/css/bulma.css";
  import "bulma-divider/dist/css/bulma-divider.min.css";
  import ChatSection from "./lib/ChatSection.svelte";

  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<main class="container">
  <Navbar />
  <Header />

  <!-- Bulma two column -->
  <div class="columns">
    <div class="column is-one-third">
      <div id="chat-section">
        <ChatSection />
      </div>
    </div>
    <div class="is-divider-vertical" />
    <div class="column">
      <h1 class="title">Realtime Chat Application</h1>
      <p>
        A basic chat application built with PeerJS and Svelte. Enter a Remote
        Peer ID (opening the same page in another tab will generate a new ID),
        choose a username, and click connect. Once connected, you can send
        messages to the other peer. Multiple clients can be connected to a
        single peer to make a chat room.
      </p>
    </div>
  </div>
</main>

<script lang="ts">
  import ChatComponent from "../chat/ChatComponent.svelte";
</script>

<div class="columns">
  <div class="column is-one-third">
    <div id="chat-section" class="box">
      <ChatComponent />
    </div>
  </div>
  <div class="is-divider-vertical" />
  <div class="column">
    <h1 class="title">Realtime Chat Application</h1>
    <p>
      A basic chat application built with PeerJS, Svelte and TypeScript. Enter a
      Remote Peer ID (opening the same page in another tab will generate a new
      ID), choose a username, and click connect. Once connected, you can send
      messages to the other peer. The chat history is stored in the browser's
      local storage, although currently can't be re-used due to using standard
      PeerJS connections.
    </p>
    <a
      href="https://github.com/benterova/benterova/tree/master/src/lib/chat"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 button">View on GitHub</a
    >
  </div>
</div>

<script lang="ts">
  import ChatComponent from "../chat/ChatComponent.svelte";
</script>

<div class="columns">
  <div class="column is-one-third">
    <div id="chat-section">
      <ChatComponent />
    </div>
  </div>
  <div class="is-divider-vertical" />
  <div class="column">
    <h1 class="title">Realtime Chat Application</h1>
    <p>
      A basic chat application built with PeerJS and Svelte. Enter a Remote Peer
      ID (opening the same page in another tab will generate a new ID), choose a
      username, and click connect. Once connected, you can send messages to the
      other peer. Multiple clients can be connected to a single peer to make a
      chat room.
    </p>
  </div>
</div>

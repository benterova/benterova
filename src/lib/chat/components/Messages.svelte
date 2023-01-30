<script lang="ts">
  import type { Message } from "../types";
  export let messages: Message[];
  export let peerId: string;
</script>

<ul class="message-container">
  {#each messages as message}
    <li data-from={message.peerId} class="message">
      <div class="message-header">
        <div class="username {message.peerId == peerId ? 'self-message' : ''}">
          {message.username}
        </div>
        <div class="timestamp">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
      <div class="content">
        {message.content}
      </div>
    </li>
  {/each}
</ul>

<style>
  .message {
    margin: 1rem 0;
  }
  .content {
    padding: 1rem;
  }
  .message-header {
    display: flex;
    justify-content: space-between;
  }
  .username {
    font-weight: bold;
  }
  .message-container {
    list-style: none;
    padding: 0;
    overflow-y: scroll;
    max-height: 50vh;
  }
  .timestamp {
    text-align: right;
    font-size: 0.8rem;
    color: #aaa;
  }
  .self-message {
    color: #00d1b2;
  }
</style>

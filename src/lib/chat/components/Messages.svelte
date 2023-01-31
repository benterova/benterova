<script lang="ts">
  import { scrollToBottom } from "../../util";
  import type { ChatMessage } from "../types";
  export let messages: ChatMessage[];
  export let peerId: string;

  $: messages.forEach((message) => {
    if (message.peerId === peerId) {
      // For display
      message.username = "You";
    }
  });

  let element: Node;

  // Scroll to bottom of messages when new message is added
  $: scrollToBottom(element);
</script>

<ul class="message-container" bind:this={element}>
  {#each messages as message}
    <li data-from={message.peerId} class="message">
      <div class="message-header">
        <div class="username {message.peerId == peerId ? 'self-message' : ''}">
          {message.username}
          <p class="is-size-7">{message.peerId}</p>
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
    color: rgb(70, 70, 70);
  }
  .self-message {
    /* color: #00d1b2; */
    font-weight: bolder;
    font-style: italic;
  }
</style>

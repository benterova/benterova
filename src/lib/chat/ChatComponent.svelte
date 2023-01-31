<script lang="ts">
  import { Peer } from "peerjs";
  import { faker } from "@faker-js/faker";
  import PeerId from "./components/PeerId.svelte";
  import type { ChatMessage } from "./types";
  import Messages from "./components/Messages.svelte";
  import AlertComponent from "./components/AlertComponent.svelte";
  import { ChatHandler } from "./ChatHandler";

  let peer = new Peer();

  let peerOpen = false;
  let peerId = "";
  let messages: ChatMessage[] = [];

  let messageInputVal: string;

  let remotePeerId: string;

  let username: string;

  let errorMessage: string | null = null;

  let chatHandler: ChatHandler;

  const connectToPeer = (remoteId) => {
    return () => {
      if (!remoteId) {
        errorMessage = "Please enter a remote peer ID";
        return;
      }
      const connection = peer.connect(remoteId);
      connection.on("open", () => {
        errorMessage = null;
        chatHandler = new ChatHandler(connection, () => {}, handleDisconnect);
      });
    };
  };

  $: if (chatHandler) {
    chatHandler.messages().subscribe((msgs) => {
      messages = msgs;
    });
  }
  $: if (errorMessage) {
    setTimeout(() => {
      errorMessage = null;
    }, 5000);
  }

  const sendMessage = (message: string) => {
    return () => {
      while (username && message && message !== "\n") {
        const msg: ChatMessage = chatHandler.buildMessage(
          message,
          username,
          peerId
        );
        chatHandler.sendMessage(msg);
        messageInputVal = "";
        return;
      }
      while (!username) {
        errorMessage = "Please enter a username";
        return;
      }
      messageInputVal = "";
      errorMessage = "Please enter a message";
    };
  };

  const setUsername = (name: string) => {
    return () => {
      while (name) {
        errorMessage = null;
        username = name;
        remotePeerId = null;
        return;
      }
      errorMessage = "Please enter a username";
    };
  };

  const toggleDisconnectModal = () => {
    const modal = document.getElementById("disconnect-modal");
    modal.classList.toggle("is-active");
  };

  const handleDisconnect = () => {
    chatHandler = null;
    username = null;
    messages = [];
  };

  peer.on("open", function (id) {
    peerOpen = true;
    peerId = id;
    localStorage.setItem("peerId", id);
    peer.on("connection", function (conn) {
      chatHandler = new ChatHandler(conn, () => {}, handleDisconnect);
    });
  });
</script>

<section class="chat">
  <!-- Prompt if sure to disconnect -->
  <div id="disconnect-modal" class="modal">
    <div class="modal-background" on:click={() => toggleDisconnectModal()} />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Are you sure?</p>
        <button
          class="delete"
          aria-label="close"
          on:click={() => toggleDisconnectModal()}
        />
      </header>
      <section class="modal-card-body">
        <p>Do you want to disconnect?</p>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-success"
          on:click={() => {
            chatHandler.close();
            toggleDisconnectModal();
          }}>Yes</button
        >
        <button class="button" on:click={() => toggleDisconnectModal()}
          >No</button
        >
      </footer>
    </div>
  </div>

  {#if errorMessage}
    <AlertComponent flashMessage={errorMessage} />
  {/if}

  <h1 class="title">PeerChat</h1>
  <p class="subtitle">A peer-to-peer example chat client.</p>

  {#if !username}
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input
          type="text"
          class="input"
          id="username-field"
          placeholder={faker.internet.userName()}
          on:keyup={(e) => {
            if (e.key === "Enter") {
              setUsername(document.getElementById("username-field").value)();
            }
          }}
        />
      </div>
    </div>
    <div class="field">
      <button
        class="button is-primary"
        on:click={() =>
          setUsername(document.getElementById("username-field").value)()}
      >
        Set Username
      </button>
    </div>
  {:else if !chatHandler}
    <PeerId {peerId} />
    <div class="field">
      <label class="label">Remote Peer ID</label>
      <div class="control">
        <input
          type="text"
          class="input"
          bind:value={remotePeerId}
          placeholder="Enter remote peer ID"
          on:keyup={(e) => {
            if (e.key === "Enter") {
              connectToPeer(remotePeerId)();
            }
          }}
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button" on:click={connectToPeer(remotePeerId)}
          >Connect</button
        >
      </div>
    </div>
  {/if}

  {#if chatHandler}
    <PeerId {peerId} small />
    <p class="is-size-6 has-text-centered">Your Username: {username}</p>
    {#if messages?.length}
      <Messages {messages} {peerId} />
    {:else}
      <p class="has-text-centered">No messages yet</p>
    {/if}
    <div class="is-divider" />

    <p class="is-size-7">Connected to {chatHandler.getPeerId()}</p>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          bind:value={messageInputVal}
          on:keyup={(e) => {
            if (e.key === "Enter") {
              sendMessage(messageInputVal)();
            }
          }}
        />
      </div>
    </div>

    <div class="field">
      <button class="button is-primary" on:click={sendMessage(messageInputVal)}
        >Send</button
      >
      <button class="button is-danger" on:click={() => toggleDisconnectModal()}>
        Disconnect
      </button>
    </div>
  {/if}
</section>

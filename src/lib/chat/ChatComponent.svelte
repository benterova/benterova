<script lang="ts">
  import { Peer } from "peerjs";
  import type { DataConnection } from "peerjs";
  import { faker } from "@faker-js/faker";
  import PeerId from "./components/PeerId.svelte";
  import type { Message } from "./types";
  import Messages from "./components/Messages.svelte";
  import AlertComponent from "./components/AlertComponent.svelte";

  let peer = new Peer();

  let peerConnnected = false;
  let peerId = "";
  let messages: Message[] = [];

  let messageInputVal: string;

  let remotePeerId: string;

  let username: string;

  let conn: DataConnection | null = null;

  let errorMessage: string | null = null;

  const connectToPeer = (remoteId) => {
    return () => {
      if (!remoteId) {
        errorMessage = "Please enter a remote peer ID";
        return;
      }
      const connection = peer.connect(remoteId);
      conn = connection;
      connection.on("open", () => {
        errorMessage = null;
        connection.on("data", (data: any) => {
          if (data.username && data.content) {
            const newMessage: Message = { ...data, peerId: remoteId };
            messages = [...messages, newMessage];
          } else if (data.newPeerId) {
            connectToPeer(data.newPeerId);
          }
        });
      });
    };
  };

  $: if (errorMessage) {
    setTimeout(() => {
      errorMessage = null;
    }, 5000);
  }

  const closeConnection = (connection) => {
    return () => {
      connection.close();
      conn = null;
      messages = [];
    };
  };

  const sendMessage = (connection: DataConnection, message: string) => {
    return () => {
      while (username && message) {
        const data: Message = {
          username: username,
          content: message,
          peerId,
          timestamp: new Date().getDate(),
        };
        connection.send(data);
        messages = [...messages, data];
        messageInputVal = "";
        return;
      }
      while (!username) {
        errorMessage = "Please enter a username";
        return;
      }
      errorMessage = "Please enter a message";
    };
  };

  const setUsername = (name: string) => {
    return () => {
      while (name) {
        errorMessage = null;
        username = name;
        return;
      }
      errorMessage = "Please enter a username";
    };
  };

  peer.on("open", function (id) {
    peerConnnected = true;
    peerId = id;

    peer.on("connection", function (connection) {
      conn = connection;
      connection.on("data", (data: Message) => {
        messages = [...messages, data];
      });
      // Handle disconnection
      connection.on("close", () => {
        conn = null;
      });
      // TODO: Pass connection to all peers.
      peer.listAllPeers((peer) => {});
    });
  });
</script>

<section class="chat">
  {#if errorMessage}
    <AlertComponent flashMessage={errorMessage} />
  {/if}
  <h1 class="title">PeerChat</h1>
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
  {:else if !conn}
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

  {#if conn}
    <PeerId {peerId} small />
    <div class="is-divider" />
    <Messages {messages} {peerId} />
    <p class="is-size-7">Connected to {conn.peer}</p>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          bind:value={messageInputVal}
          on:keyup={(e) => {
            if (e.key === "Enter") {
              sendMessage(conn, messageInputVal)();
            }
          }}
        />
      </div>
    </div>

    <div class="field">
      <button
        class="button is-primary"
        on:click={sendMessage(conn, messageInputVal)}>Send</button
      >
      <button
        class="button is-danger"
        on:click={() => {
          conn.close();
          conn = null;
        }}
      >
        Disconnect
      </button>
    </div>
  {/if}
</section>

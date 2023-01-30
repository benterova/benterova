<script lang="ts">
  import { Peer } from "peerjs";
  import type { DataConnection } from "peerjs";
  import { faker } from "@faker-js/faker";

  let peer = new Peer();

  let peerConnnected = false;
  let peerId = "";

  type Message = { username: string; content: string };

  let messages: Message[] = [];

  let messageInput: string;

  let remotePeerId: string;

  let username: string;

  let conn: DataConnection | null = null;

  const connectToPeer = (peerID) => {
    return () => {
      const connection = peer.connect(peerID);
      conn = connection;
      connection.on("open", () => {
        connection.on("data", (data: any) => {
          if (data.username && data.content) {
            messages = [...messages, data];
          } else if (data.newPeerId) {
            connectToPeer(data.newPeerId);
          }
        });
      });
    };
  };

  const sendMessage = (connection: DataConnection, message: string) => {
    return () => {
      if (username && message) {
        const data: Message = { username: username, content: message };
        connection.send(data);
        messages = [...messages, data];
        messageInput = "";
      } else {
        alert("Please enter a username and message");
      }
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
        />
      </div>
    </div>
    <div class="field">
      <button
        class="button is-primary"
        on:click={() => {
          username = document.getElementById("username-field").value;
        }}
      >
        Set Username
      </button>
    </div>
  {:else if !conn}
    <div class="field">
      <label class="label">Your Peer ID</label>
      <div class="control">
        <input type="text" class="input" value={peerId} readonly />
      </div>
    </div>
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
  {:else if peerConnnected}
    <ul>
      {#each messages as message}
        <li>{message.username}: {message.content}</li>
      {/each}
    </ul>

    {#if conn}
      <h2>Connected to {conn.peer}</h2>
      <input
        type="text"
        bind:value={messageInput}
        on:keyup={(e) => {
          if (e.key === "Enter") {
            sendMessage(conn, messageInput)();
          }
        }}
      />
      <div class="field">
        <button
          class="button is-primary"
          on:click={sendMessage(conn, messageInput)}>Send</button
        >
      </div>
    {/if}
  {:else}
    <h1>Not Connected</h1>
  {/if}
</section>

<style>
  .chat {
    padding: 1rem;
  }
</style>

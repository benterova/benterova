<script lang="ts">
    import { Peer, DataConnection } from "peerjs";

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
            // Pass connection to all peers.
            peer.listAllPeers((peer) => {});
        });
    });
</script>

<section>
    {#if peerConnnected}
        <h1>Ready, your ID is {peerId}</h1>
        <ul>
            {#each messages as message}
                <li>{message.username}: {message.content}</li>
            {/each}
        </ul>
        {#if !username}
            <input type="text" id="username-field" placeholder="Username" />
            <button
                on:click={() => {
                    username = document.getElementById("username-field").value;
                }}
            >
                Set Username
            </button>
        {/if}
        {#if conn}
            <h2>Connected to {conn.peer}</h2>
            <input type="text" bind:value={messageInput} />
            <button on:click={sendMessage(conn, messageInput)}>Send</button>
        {:else}
            <input
                type="text"
                bind:value={remotePeerId}
                placeholder="Remote Peer ID"
            />
            <button on:click={connectToPeer(remotePeerId)}>Connect</button>
        {/if}
    {:else}
        <h1>Not Connected</h1>
    {/if}
</section>

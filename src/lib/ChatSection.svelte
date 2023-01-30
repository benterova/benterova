<script lang="ts">
    import * as PEERS from "peerjs";

    let peer = new PEERS.Peer();

    let peerConnnected = false;
    let peerId = "";

    type Message = { username: string; content: string };

    let messages: Message[] = [];

    let message: string;

    let remotePeerId: string;

    let username: string;

    let conn: PEERS.DataConnection | null = null;

    const connectToPeer = (peerID) => {
        return () => {
            const connection = peer.connect(peerID);
            conn = connection;
            connection.on("open", () => {
                connection.on("data", (data: Message) => {
                    messages = [...messages, data];
                });
            });
        };
    };

    const sendMessage = (connection: PEERS.DataConnection, message: string) => {
        return () => {
            if (username && message) {
                const data: Message = { username: username, content: message };
                connection.send(data);
                messages = [...messages, data];
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
        });
    });
</script>

<section>
    {#if peerConnnected}
        <h1>Connected, your ID is {peerId}</h1>
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
            <input type="text" bind:value={message} />
            <button on:click={sendMessage(conn, message)}>Send</button>
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

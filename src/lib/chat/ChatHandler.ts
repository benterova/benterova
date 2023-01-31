// Class to wrap PeerJS connection and handle chat messages

import type { DataConnection } from "peerjs";
import type { ChatMessage } from "./types";
import { writable, type Writable } from "svelte/store";

export class ChatHandler {
  private conn: DataConnection;
  private onMessage: (message: ChatMessage) => void;
  private onDisconnect: (peerId: string) => void;
  private storage: Writable<ChatMessage[]>;

  private storageLocation: string;

  constructor(
    conn: DataConnection,
    onMessage?: (message: ChatMessage) => void,
    onDisconnect?: (peerId: string) => void
  ) {
    // this.storageLocation = username;
    // Old peer-based storage location.
    this.conn = conn;
    this.storageLocation = conn.peer;
    this.onMessage = onMessage;
    this.onDisconnect = onDisconnect;
    this.storage = writable(
      JSON.parse(localStorage.getItem(this.storageLocation))
    );

    this.conn.on("data", (data: ChatMessage) => {
      if (data.id) {
        let messages: ChatMessage[] =
          JSON.parse(localStorage.getItem(this.storageLocation)) || [];
        // BEN FIGURE OUT HOW TO GET THE MESSAGES FROM THE STORE
        messages.push(data);
        this.messages().set(messages);
        if (this.onMessage) this.onMessage(data);
      } else {
        // this.confirmReceipt(data);
      }
    });

    this.messages().subscribe((messages) => {
      this.updateMessages(messages);
    });

    this.conn.on("close", () => {
      if (this.onDisconnect) this.onDisconnect(this.conn.peer);
    });
  }

  public sendMessage(message: ChatMessage) {
    // Generate an ID for the message and delivery confirmation
    let messages: ChatMessage[] =
      JSON.parse(localStorage.getItem(this.storageLocation)) || [];
    messages.push(message);
    message.id = Math.random().toString(36);
    this.conn.send(message);
    this.messages().set(messages);
    return message;
  }

  public close() {
    this.storage.set([]);
    this.conn.close();
  }

  public connected() {
    return this.conn.open;
  }

  public buildMessage(content: string, username: string, peerId: string) {
    return {
      content: content,
      username: username,
      timestamp: new Date().getTime(),
      peerId: peerId,
    };
  }

  public getPeerId() {
    return this.conn.peer;
  }

  public messages(): Writable<ChatMessage[]> {
    return this.storage;
  }

  private updateMessages(messages: ChatMessage[]) {
    localStorage.setItem(this.storageLocation, JSON.stringify(messages));
  }
}

export type ChatMessage = {
  id?: string;
  username: string;
  content: string;
  peerId: string;
  timestamp: number;
  delivered?: boolean = false;
};

export type DeliveryPayload = {
    id: string;
    peerId: string;
};

// export type ChatHandler = {
//     conn: DataConnection;
//     onMessage: (message: ChatMessage) => void;
//     onDisconnect: (peerId: string) => void;
//     storage: string;
//     sendMessage: (message: ChatMessage) => ChatMessage;
//     confirmDelivery: (message: ChatMessage) => void;
//     confirmReceipt: (message: ChatMessage) => void;
//     close: () => void;
// };


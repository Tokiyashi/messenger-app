export interface Message {
  message: string;
  uid: string;
  createdAt: Date;
}

export interface ChatMessage extends Message {
  chatId: string;
}

export interface DirectMessage extends Message {
  receiverId: string;
}

export interface Message {
  id: string;
  message: string;
  uid: string;
  createdAt: Date;
  isPlayedNotification: boolean;
}

export interface ChatMessage extends Message {
  chatId: string;
}

export interface DirectMessage extends Message {
  receiverId: string;
}

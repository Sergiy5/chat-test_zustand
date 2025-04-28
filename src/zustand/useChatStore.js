import { create } from "zustand";

// type Message = {
//   id: string,
//   sender: "user" | "bot",
//   text: string,
//   timestamp: number,
// };

// type Chat = {
//   id: string,
//   title: string, // optional, like "Chat with Bot #1"
//   messages: Message[],
// };

// type ChatStore = {
//   chats: Chat[],
//   activeChatId: string | null,
//   createChat: (title: string) => void,
//   addMessage: (
//     chatId: string,
//     message: Omit<Message, "id" | "timestamp">
//   ) => void,
//   setActiveChat: (chatId: string) => void,
//   clearMessages: (chatId: string) => void,
// };

export const useChatStore = create((set) => ({
  chats: [],
  activeChatId: null,

  createChat: (title) =>
    set((state) => {
      const newChat = {
        id: crypto.randomUUID(),
        title,
        messages: [],
      };
      return {
        chats: [newChat, ...state.chats],
        activeChatId: newChat.id,
      };
    }),

  addMessage: (chatId, message) =>
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id !== chatId) return chat;

        const newMessage = {
          id: crypto.randomUUID(),
          text: message.text,
          sender: message.sender,
          timestamp: Date.now(),
        };

        const isFirstMessage = chat.messages.length === 0;
        const newTitle = isFirstMessage
          ? message.text.length > 20
            ? message.text.slice(0, 20) + "..."
            : message.text
          : chat.title;

        return {
          ...chat,
          title: newTitle,
          messages: [...chat.messages, newMessage],
        };
      }),
    })),

  setActiveChat: (chatId) => set({ activeChatId: chatId }),

  clearMessages: (chatId) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId ? { ...chat, messages: [] } : chat
      ),
    })),

  // 👉 ADD THIS
  removeChat: (chatId) =>
    set((state) => {
      const filteredChats = state.chats.filter((chat) => chat.id !== chatId);
      const isRemovingActive = state.activeChatId === chatId;
      return {
        chats: filteredChats,
        activeChatId: isRemovingActive
          ? filteredChats[0]?.id ?? null
          : state.activeChatId,
      };
    }),
}));
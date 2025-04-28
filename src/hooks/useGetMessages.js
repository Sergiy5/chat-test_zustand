import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useChatStore } from "../zustand/useChatStore";

export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [newMessages, setNewMessages] = useState([]);
  const { chats, activeChatId, addMessage } = useChatStore();

  useEffect(() => {
    if (newMessages.length === 0) return;
      if (newMessages[newMessages.length - 1].sender === "user") {
        setTimeout(() => {
          const botMessage = {
            id: crypto.randomUUID(),
            sender: "bot",
            text: "Hello, how can I help you?",
            timestamp: Date.now(),
          };
          addMessage(activeChatId, botMessage);
          setNewMessages((prev) => [...prev, botMessage]);
        }, 1000);
      }
  }, [activeChatId, addMessage, newMessages]);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const messages = await new Promise((resolve) => {
          setTimeout(() => {
            const foundMessages = chats.find((chat) => chat.id === activeChatId)?.messages || [];
            resolve(foundMessages);
          }, 2000);
        });

        setNewMessages(messages); // or if you type it better, you won't need `as any`
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (activeChatId) {
      getMessages();
    }
  }, [activeChatId, chats]);

  return { newMessages, loading };
};
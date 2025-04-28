import { useEffect, useRef, useState } from "react";
import { useGetMessages } from "../../hooks/useGetMessages";
import { Message } from "./Message";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { newMessages, loading } = useGetMessages();

  const lastMessageRef = useRef(null);

  useEffect(() => {
    setMessages((prev)=>[prev, ...newMessages]);
  }, [newMessages]);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* {!loading && */}
       { messages.length > 0 &&
        messages.map((message) => (
          <div key={message.id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

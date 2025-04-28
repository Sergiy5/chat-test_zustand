import { useEffect, useRef } from "react";
import { useGetMessages } from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../skeletons/MessageSkeleton.jsx";
import { Message } from "./Message";

export const Messages = () => {
  const { newMessages, loading } = useGetMessages();

  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [newMessages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        newMessages.length > 0 &&
        newMessages.map((message) => (
          <div key={message.id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && newMessages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

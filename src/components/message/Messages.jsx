import { useEffect, useRef } from "react";
import { useGetMessages } from "../../hooks/useGetMessages";
import { Message } from "./Message";

export const Messages = () => {
  const { newMessages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (newMessages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [newMessages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {newMessages.length > 0 &&
        newMessages.map((message) => {
          return (
            <div key={message.id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}

      {!loading && newMessages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

// import { useEffect, useRef, useState } from "react";
// import { useGetMessages } from "../../hooks/useGetMessages";
// import { Message } from "./Message";

// export const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const { newMessages, loading } = useGetMessages();

//   const lastMessageRef = useRef(null);

//   useEffect(() => {
//     if (!newMessages.at(-1)) return;
//       console.log("newMessages.at(-1)", newMessages.at(-1));
//     if (newMessages.length === 0 || !newMessages.at(-1)) setMessages([]);
//     setMessages((prev) => [...prev, newMessages.at(-1)]);
//   }, [newMessages]);

//   useEffect(() => {
//     console.log("newMessages", messages);
//     setTimeout(() => {
//       // if (newMessages.length === 0) setMessages([]);
//       // setMessages((prev) => [...prev, newMessages.at(-1)]);
//       lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       {/* {!loading && */}
//        { messages.length > 0 &&
//         messages.map((message, i) => (
//           <div key={message.id + i} ref={lastMessageRef}>
//             <Message message={message} />
//           </div>
//         ))}

//       {!loading && messages.length === 0 && (
//         <p className="text-center">Send a message to start the conversation</p>
//       )}
//     </div>
//   );
// };

import { useState } from "react";
import { useChatStore } from "../../zustand/useChatStore";
import { IoIosSend } from "react-icons/io";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { addMessage, activeChatId } = useChatStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    addMessage(activeChatId, { text: message, sender: "user" });
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center p-2 cursor-pointer hover:bg-gray-600 transition-colors duration-300 rounded-lg"
        >
          <IoIosSend className="w-6 h-6 text-slate-300" />
        </button>
      </div>
    </form>
  );
};

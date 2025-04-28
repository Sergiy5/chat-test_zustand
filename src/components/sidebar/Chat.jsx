import { useChatStore } from "../../zustand/useChatStore";

export const Chat = ({ chat }) => {
  const { removeChat, activeChatId, setActiveChat } = useChatStore();
  const isSelected = activeChatId === chat.id;

  return (
    <div className="flex justify-between">
      <button
        className={`group flex gap-2 items-center w-full hover:bg-gray-400 rounded-lg p-1 pl-4 cursor-pointer
				${isSelected ? "bg-gray-600" : "bg-gray-700 opacity-35"}
        `}
        onClick={() => setActiveChat(chat.id)}
      >
        <p className="font-bold text-gray-200 group-hover:text-white ">
          {chat.title}
        </p>
      </button>
      <button
        onClick={() => removeChat(chat.id)}
        className="px-2 ml-4 text-gray-500 hover:text-red-600"
      >
        X
      </button>
    </div>
  );
};

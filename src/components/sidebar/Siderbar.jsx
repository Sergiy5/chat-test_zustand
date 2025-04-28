import LogoutButton from "./LogoutButton";
import { useChatStore } from "../../zustand/useChatStore";
import { ChatList } from "./ChatList";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export const Sidebar = ({ hideSidebar }) => {
  const { createChat, chats } = useChatStore();

  const handleCreateChat = () => {
    createChat("New Chat");
    hideSidebar(false);
  };

  return (
    <div className="relative border-r border-slate-500 px-4 pt-7 flex flex-col h-full w-[220px]">
      <button
        onClick={handleCreateChat}
        className="btn btn-block btn-sm mt-2 border border-slate-700"
      >
        New Chat
      </button>
      <div className="divider px-3"></div>

      <ChatList chats={chats} />
      <LogoutButton />
      <button
        onClick={() => hideSidebar(false)}
        className=" absolute top-0 left-0 flex items-center justify-center size-7 md:hidden"
      >
        <FaArrowRightArrowLeft className="w-4 h-4 text-slate-500" />
      </button>
    </div>
  );
};

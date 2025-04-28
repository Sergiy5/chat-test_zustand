import LogoutButton from "./LogoutButton";
import { useChatStore } from "../../zustand/useChatStore";
import { ChatList } from "./ChatList";

export const Sidebar = () => {
  const { createChat, chats } = useChatStore();

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-[220px]">
      <button
        onClick={() => createChat("New Chat")}
        className="btn btn-block btn-sm mt-2 border border-slate-700"
      >
        New Chat
      </button>
      <div className="divider px-3"></div>

      <ChatList chats={chats} />
      <LogoutButton />
    </div>
  );
};

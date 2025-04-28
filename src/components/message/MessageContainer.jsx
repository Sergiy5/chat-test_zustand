import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useChatStore } from "../../zustand/useChatStore";
import { MessageInput } from "./MessageInput";
import { Messages } from "./Messages";

export const MessageContainer = () => {
  const { activeChatId } = useChatStore();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!activeChatId ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2"></div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.name}</p>
        <p>What would you like to chat about?</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

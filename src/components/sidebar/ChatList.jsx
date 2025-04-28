import { Chat } from "./Chat";

export const ChatList = ({ chats }) => {
  
  return (
    <ul className="py-2 flex flex-col gap-4 mt-8 overflow-auto">
      {chats.map((chat) => (
        <li key={chat.id}>
          <Chat chat={chat} />
        </li>
      ))}
    </ul>
  );
};

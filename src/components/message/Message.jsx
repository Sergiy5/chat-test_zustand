import { extractTime } from "../../utils/extractTime";

export const Message = ({ message }) => {
  const { sender, text, createdAt, shouldShake } = message;

  const fromMe = sender === "user";
  const formattedTime = extractTime(createdAt);

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 max-w-xs sm:max-w-sm break-words whitespace-pre-wrap`}
      >
        {text}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

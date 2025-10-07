import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center mt-3">
      <input
        type="text"
        className="flex-1 border rounded-xl px-4 py-2"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-xl"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;


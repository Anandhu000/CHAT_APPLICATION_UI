import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white shadow-md rounded-xl">
      {messages.map((msg, index) => (
        <div key={index} className={`my-2 ${msg.isSender ? "text-right" : "text-left"}`}>
          <div
            className={`inline-block px-3 py-2 rounded-2xl ${
              msg.isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;


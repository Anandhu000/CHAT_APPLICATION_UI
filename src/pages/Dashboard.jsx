import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [contacts] = useState([{ name: "John" }, { name: "Alice" }]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, isSender: true }]);
  };

  return (
    <div className="flex h-screen p-4 gap-4 bg-gray-100">
      <Sidebar contacts={contacts} onSelectChat={() => {}} />
      <div className="flex flex-col flex-1">
        <ChatWindow messages={messages} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default Dashboard;


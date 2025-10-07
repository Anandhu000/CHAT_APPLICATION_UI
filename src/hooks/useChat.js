import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export const useChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit("send_message", message);
  };

  return { messages, sendMessage };
};


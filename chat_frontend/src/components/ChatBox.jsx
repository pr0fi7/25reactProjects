import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:4000");

const ChatBox = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [input, setInput] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let storedUserId = sessionStorage.getItem("userId");

    if (!storedUserId) {
      storedUserId = Math.random().toString(36).substring(7);
      sessionStorage.setItem("userId", storedUserId);
    }

    setUserId(storedUserId);
    socket.emit("join", storedUserId);

    socket.on("ReceiveMessage", (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];

        // Save messages to localStorage
        localStorage.setItem("messages", JSON.stringify(updatedMessages));

        return updatedMessages;
      });
    });

    return () => {
      socket.off("ReceiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = { userId, message: input };

      socket.emit("SendMessage", newMessage);

        // Save to localStorage
        localStorage.setItem("messages", JSON.stringify(newMessage));


      setInput("");
    }
  };

  return (
    <div>
      <h1>Chat Box</h1>
      <div>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index}>
              <span>{msg.userId}: </span>
              <span>{msg.message}</span>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;

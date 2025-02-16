"use client";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // You can use any icon you like
import './Chatbot.css'
import { FaPaperPlane } from "react-icons/fa"; // Send icon
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  // Toggle the chat window open and close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div
        className={`chatbot-button ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleChat}
      >
        <FaComments size={30} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Chat with us</span>
            <button className="close-button" onClick={toggleChat}>x</button>
          </div>
          <div className="chatbot-body">
          <Image src="/chatbot_img.jpg" alt="Chatbot" width={150} height={150} className="m-auto" />
          <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}><FaPaperPlane className="send-icon" /></button>
            <div>
              <strong>Reply:</strong> {reply}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

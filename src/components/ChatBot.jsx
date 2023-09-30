import React, { useState } from "react";
import "./chatbot.css";

const ChatBot = () => {
    const [textBoxVisible, setTextBoxVisible] = useState(false);
    const [textBoxPosition, setTextBoxPosition] = useState({ x: 0, y: 0 });
  
    const handleImageClick = (e) => {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
  
      setTextBoxPosition({ x, y });
      setTextBoxVisible(true);
    };
  
    const handleTextBoxClose = () => {
      setTextBoxVisible(false);
    };
  
    return (
      <div className="chatbox-container">
        <img
          src="/images/ChatBot_ace-1.gif"
          alt="chatbot-img"
          className="chatbot-img"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
  
        {textBoxVisible && (
          <div className="bottext-container">
            <p>Ask something!!</p>
            <textarea className="chatbot-text" rows="4" cols="50" />
            <button className="chatbot-close" onClick={handleTextBoxClose}>Close</button>
            <button className="chatbot-enter">Enter</button>
          </div>
          
        )}
      </div>
    );
  };

export default ChatBot




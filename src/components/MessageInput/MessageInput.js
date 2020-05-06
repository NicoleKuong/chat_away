import React from "react";
import "./MessageInput.css";

const MessageInput = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Enter a message ..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      //when user press "Enter" then call the sendMessage function if not, do nothing
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>
      SEND
    </button>
  </form>
);

export default MessageInput;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinChat.css";

export default function JoinChat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const signInChat = (event) => {
    return !name || !room ? event.preventDefault() : null;
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <input
          placeholder="enter name"
          className="joinInput"
          type="text"
          onChange={handleNameChange}
        />
        <input
          placeholder="enter room name"
          className="joinInput mt-20"
          type="text"
          onChange={handleRoomChange}
        />
        <Link onClick={signInChat} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
}

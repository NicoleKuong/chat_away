import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

export default function ChatRoom() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    //get the data that user enterd when joined the chat
    //get a URL back with location.search but parse it to an object
    const { name, room } = queryString.parse(location.search);

    console.log("location.search", location.search);
    console.log("user data from URL", name, room);

    setName(name);
    setRoom(room);
  });

  return <div>Hello</div>;
}

import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

export default function ChatRoom({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:4000";

  useEffect(() => {
    //get the data that user enterd when joined the chat
    //get a URL back with location.search but parse it to an object
    const { name, room } = queryString.parse(location.search);

    // console.log("location.search", location.search);
    // console.log("user data from URL", name, room);

    //when get the connection and get an endpoint to server
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // console.log("socket", socket);
    //emit event from client side and able to pass in some data
    socket.emit("join", { name, room }, () => {});

    //componentUnmount - for disconnection
    return () => {
      socket.emit("disconnect");
      //turn off the "join" emit event
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  //UP: only when these two values change, then rerender useEffect

  return <div>Hello</div>;
}

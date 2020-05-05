import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import JoinChat from "./components/JoinChat/JoinChat";
import ChatRoom from "./components/ChatRoom/ChatRoom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={JoinChat} />
          <Route path="/chat" exact component={ChatRoom} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

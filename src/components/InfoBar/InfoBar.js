import React from "react";
import onlineIcon from "../../assets/onlineIcon.png";
import closeIcon from "../../assets/closeIcon.png";
import "./InfoBar.css";

const InfoBar = (props) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online image" />
      <h3>{props.room}</h3>
    </div>
    <div className="rightInnerContainer">
      {/* refresh the page so that the user will leave the chat room */}
      <a href="/">
        <img src={closeIcon} alt="close image" />
      </a>
    </div>
  </div>
);

export default InfoBar;

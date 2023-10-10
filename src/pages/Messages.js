import React from "react";
import { Container } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import messenger from "../assets/messengar-logo.png";
import Button from "@mui/joy/Button";
import Sendmsg from "../components/Sendmessage";
import Sidebar from "../components/Sidebar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Messages() {
  return (
    <div className="messagesPage">
      <div>
        <Sidebar />
      </div>
      <div className="sendedMessage">
        <Container maxWidth="md">
          <div className="messagePageDispaly">
            <div className="sendMes">
              <div>
                <h3>omaradwn</h3>
              </div>
              <div className="hm">
              <div>
                <KeyboardArrowDownIcon
                  style={{ marginTop: 7}}
                />
              </div>
              <div className="creatgroup">
                <AddCircleOutlineIcon />
              </div>
              </div>
            </div>
            <div className="masseagePlaceholder">
              <h4>Messages</h4>
              <p>Request</p>
            </div>
            <div>
              
              <Sendmsg/>
            </div>
          </div>
        </Container>
      </div>
      <div className="sendAMessaging">
        <div>
          <img src={messenger}></img>
        </div>
        <div>
          <h3>Your Messages</h3>
        </div>
        <div>
          <p className="ptext" style={{ color: "gray" }}>
            Send private photos and messages to a friend or group
          </p>
        </div>
        <div>
          <Button style={{ marginTop: 15 }}>SEND MESSAGE</Button>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import img from "../assets/StoriesAvatars/graduated-student.png";
import { Button } from "@mui/material";


function Newfollowers() {
  return (
    <div className="accountSide">
      <div>
        <div className="border">
          <img src={img}></img>
        </div>
      </div>
      <div>
        <div>
          <p >khlaid11</p>
        </div>
        <div>
          <p className="accountName">
            Khlaid Nidal
          </p>
        </div>
      </div>
      <div className="switch">
        <Button  size="small">
          switch
        </Button>
      </div>
    </div>
  );
}

export default Newfollowers;

import React from "react";
import img from "../assets/StoriesAvatars/driver.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Profilepic() {
  return (
    <div className="postHeader">

      <div className="postName">
        <div className="postBorder">
          <img src={img}></img>
        </div>
        <div className="postHeaderInfo">
          <div>
            <p>No one</p>
          </div>
          <div className="timeOut">
            <p>9999h</p>
          </div>
         
        </div>
      </div>

      <div className="more">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Profilepic;

import React from "react";
import ilogo from "../assets/instagram-logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import profilepic from "../assets/profilepic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Modalcreate from "./Modalcreate";

let iconStyle = {
  color: "white",
  textDecoration: "none",
}

function Sidebar() {
  // const { setOpen } = useContext(usecontext);
  return (
    <div className="Navcont">
      <div className="logo ">
        <img className="ilogo" src={ilogo}/>
      </div>
      <div className="navs">
        <div className="icons">
          <HomeIcon sx={{ fontSize: 28 }} className="Icon" />
          <Link style={iconStyle} to={"/"}>
            <span> Home</span>
          </Link>
        </div>
        <div className="icons">
          <SearchIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Search</span>
        </div>
        <div className="icons">
          <ExploreIcon sx={{ fontSize : 28 }} className="Icon"/>
          <Link
            style={iconStyle}
            to={"/explore"}
          >
            <span>Explore</span>
          </Link>
        </div>
        <div className="icons">
          <SlideshowIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Reels</span>
        </div>
        <div className="icons">
          <ChatIcon sx={{ fontSize : 28 }} className="Icon"/>
          <Link
            style={iconStyle}
            to={"/messages"}
          >
            <span>Messages</span>
          </Link>
        </div>
        <div className="icons">
          <FavoriteBorderIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Notifications</span>
        </div>
        <Modalcreate className="Icon"/>
        <div className="icons">
          <img src={profilepic} style={{marginRight:"7px"}} className="profile-pic"></img>
          <Link
            style={iconStyle}
            to={"/profile"}
          >
            <span>Khalid Nidal</span>
          </Link>
        </div>
        <div className="menu-item icons">
          <MenuIcon />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

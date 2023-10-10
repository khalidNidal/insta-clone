import React from "react";
import Navbar from "../components/Sidebar";
import Container from "@mui/material/Container";
import Story from "../components/Story";
import Post from "../components/Post";
import Newfollowers from "../components/Newfollowers";
import Addpeople from "../components/Addpeople";
import { useState } from "react";
function Home() {
  
  return (
    <div className="homepage">
      <div>
        <Navbar />
      </div>
      <div className="homedivs">
        <div className="content">
          <Container maxWidth="md">
            <Story />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Container>
        </div>
        <div className="newfollower">
          <Container maxWidth="sm">
            <div className="Bnewfollower">
              <Newfollowers />
              <div className="knownPeople">
                <p>Suggestions for you</p>
                <p>See More</p>
              </div>
              <Addpeople />
              <Addpeople  />
              <Addpeople  />


              {/* <div>
                <p style={{color:"gray",fontSize:12}}>
                  About . Help . Press . API . Jobs . Privacy . Terms. Locations
                  . Language . Meta Verified
                </p>
                
                <p style={{color:"gray",fontSize:12}}>© 2023 INSTAGRAM FROM META</p>
              </div> */}
            </div>
          </Container>
        </div>
      </div>
    </div>
    
  );
}

export default Home;

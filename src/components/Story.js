import React, { useEffect } from "react";
import img from "../assets/StoriesAvatars/driver.png";
import img2 from "../assets/StoriesAvatars/female-chef.png";
import img3 from "../assets/StoriesAvatars/farmer-avatar.png";
import img4 from "../assets/StoriesAvatars/graduated-student.png";
import img5 from "../assets/StoriesAvatars/flight-attendant.png";
import img6 from "../assets/StoriesAvatars/saleswoman.png";
import { useState } from "react";
import BasicModal from "./StoryModal";
import { Container } from "@mui/system";
const fitWidth = 'fit-content'
const names = document.getElementsByClassName('ptext')
console.log(names)
const name0 = names[0]
function Story() {
  const [clickOnStory, setClickOnStory] = useState(false);
  const [value , setValue] =  useState(false);
  
   function clicked (){
    if(clickOnStory){
      return <BasicModal value={value} pic={img} name={name0}  />;
    }
   }
  


  return (
    <>
    <Container  sx={{width:fitWidth}} >
      {clicked()}      
      <div className="stories">
        <div className="story">  
          <div
            onClick={() => {
              setClickOnStory(!clickOnStory);
              setValue(!value);
            }}
            className="border"
          >
            <img src={img}></img>
          </div>
          <p className="ptext">Khalid</p>
        </div>
        <div className="story">
          <div className="border">
            <img src={img2}></img>
          </div>
          <p style={{ marginBottom: 10 }} className="ptext">
            nada
          </p>
        </div>
        <div className="story">
          <div className="border">
            <img src={img3}></img>
          </div>
          <p className="ptext">laith</p>
        </div>
        <div className="story">
          <div className="border ">
            <img src={img4}></img>
          </div>
          <p className="ptext">ahmad</p>
        </div>
        <div className="story">
          <div className="border ">
            <img src={img5}></img>
          </div>
          <p className="ptext">mohammad</p>
        </div>
        <div className="story">
          <div className="border ">
            <img src={img6}></img>
          </div>
          <p className="ptext">yazan</p>
        </div>
        <div className="story">
          <div className="border ">
            <img src={img}></img>
          </div>
          <p className="ptext">ajwad</p>
        </div>
      </div>
      </Container>
    </>
  );
}

export default Story;

import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Navbar from "../../Navbar/Navbar";
const About = () => {
  const visitInstagram = () => {
    window.location = "#";
  };
  return (
    <div>
      <Navbar/>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography style={{color:"black",fontWeight:'bold'}} component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/ROBIX LOGOS.jpg"
              alt="Founder"
            />
            <Typography>Wardrobix</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This website is made by @Wardrobix.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography style={{fontWeight:"bold"}} component="h2">Our Brands</Typography>
            <a href="/" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

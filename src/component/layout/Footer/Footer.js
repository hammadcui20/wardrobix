import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div> */}
      <div>
        <img
          style={{
            height: "100px",
            width: "100px",
            marginLeft: "50px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          src="/logo.png"
          alt="Wardrobix Logo"
        />
      </div>
      <div className="midFooter">
        <h1>Wardrobix.</h1>
        <p>High Quality is our first priority</p>
            
        <p>Copyrights 2025 @Ayesha, Fatima Munawar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fa-icon" /> Instagram
        </a>
        <a style={{marginRight:"20px"}} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="fa-icon" /> Youtube
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="fa-icon" /> Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;

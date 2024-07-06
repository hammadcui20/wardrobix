import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import Navbar from "../../Navbar/Navbar";
// import Footer from "../Footer/Footer";


const Contact = () => {
  return (
   <div>
    <Navbar/>
    <div className="contactContainer" style={{ backgroundImage: "url('https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover" }}>
      <img alt="image"></img>
      <a style={{marginTop:'-500px'}} className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: wardrobixofficial@gmail.com</Button>
      </a>
    </div>
    
    </div>
    
  );
};

export default Contact;

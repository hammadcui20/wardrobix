import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Tryon.css'; // Import the external CSS file
import Navbar from '../Navbar/Navbar';

function TryOn() {
  return (
    <div>
      <Navbar />
      <div className="etailer-container"> {/* Apply the class name for the background image */}
        <div style={{ 
          display: 'flex', 
          justifyContent: "center",
          alignItems: 'center', 
          marginTop: '20px', 
          gap: '20px' 
        }}>
          <div>
            <Card style={{ width: '18rem', marginTop: "200px",marginRight:"600px" }}>
              <Card.Img style={{height:"140px"}} variant="top" src="shirt45.jpg" alt="Men's Collection" />
              <Card.Body>
               
                
                <Link to="/tryon/show" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <button className="button">Explore</button>
                </Link> 
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: "center",
          alignItems: 'center', 
          marginTop: '40px' 
        }}>
          <video autoPlay muted loop>
            <source src="/try.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default TryOn;

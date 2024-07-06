import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './etailor.css'; // Import the external CSS file
import Navbar from '../Navbar/Navbar';

function Etailer() {
  return (
<div>
  <Navbar/>    
    <div className="etailer-container">
      
      <video autoPlay muted loop>
      <source src="/6460113-hd_1920_1080_25fps.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className='content'>
        <div style={{ 
          display: 'flex', 
          justifyContent: "center",
          alignItems: 'center', 
          marginTop: '20px', 
          gap: '20px' 
        }}>
          <div>
            <Card style={{ width: '18rem', marginTop: "170px",marginLeft:"900px"  }}>
              <Card.Img style={{height:"140px"}} variant="top" src="shirt45.jpg" alt="Men's Collection" />
              <Card.Body>
               
                <Link to="/etailor/shirts/men" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <button className="button">Explore</button>
                </Link> 
              </Card.Body>
            </Card>
          </div>

         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Etailer;

import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

const ProcessedImage = () => {
  const location = useLocation();
  const { processedImage } = location.state;

  return (
    <>
      <Navbar/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h2>Processed Image</h2>
        {processedImage ? (
          <img src={`data:image/jpeg;base64,${processedImage}`} alt="Processed" />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </>
  );
};

export default ProcessedImage;

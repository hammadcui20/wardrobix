import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import axios from "axios";

const TryOnProducts = ({ product }) => {
  const [processedImage, setProcessedImage] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const handleUserImageChange = (e) => {
    setUserImage(e.target.files[0]);
  };

  const handleClick = async () => {
    try {
      const formData = new FormData();
      formData.append('image_path', product.images[0].url);
      formData.append('user_image', userImage);
      
      const response = await axios.post('http://localhost:5000/try-on', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Assuming the API returns the image data as base64 string
      const imageData = response.data.image; // Adjust according to your API response
      
      // Set the processed image data to state
      setProcessedImage(imageData);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="productCard">
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`${product.price}`}</span>
      
      {/* Input for user image */}
      <input type="file" accept="image/*" onChange={handleUserImageChange} />
      
      <button className="btn btn-primary button" onClick={handleClick}>Try On</button>
      
      {/* Display the processed image if available */}
      {processedImage && (
        <div>
          <p>Processed Image:</p>
          <img src={`data:image/jpeg;base64,${processedImage}`} alt="Processed" />
        </div>
      )}
    </div>
  );
};

export default TryOnProducts;

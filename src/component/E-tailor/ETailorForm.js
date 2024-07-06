// ETailorForm.js

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation,useHistory, useParams } from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";


const ETailorForm = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const location = useLocation();
  const { state } = location; // Access state from location
  const product = state ? state.product : null;

  const [quantity, setQuantity] = useState(1);

  const [measurements, setMeasurements] = useState({
    chest: "",
    arms: "",
    length: "",
    neckSize: "",
    // Add more measurement fields as needed
  });

  const handleChange = (e) => {
    setMeasurements({ ...measurements, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add product to cart with measurements
    dispatch(addItemsToCart(product._id, quantity, measurements.chest, measurements.arms, measurements.length, measurements.neckSize));
    alert.success("Item Added To Cart");
  };


  return (
    <div style={{marginLeft:"50%",padding:"40px"}} className="etailor-form">
      <h2>E Tailor Form ( {product.name} )</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="chest">Chest:</label>
          <input
            type="text"
            id="chest"
            name="chest"
            value={measurements.chest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arms">Arms:</label>
          <input
            type="text"
            id="arms"
            name="arms"
            value={measurements.arms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="length">Length:</label>
          <input
            type="text"
            id="length"
            name="length"
            value={measurements.length}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="neckSize">Neck Size:</label>
          <input
            type="text"
            id="neckSize"
            name="neckSize"
            value={measurements.neckSize}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for other measurements */}
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default ETailorForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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

  const [fabric, setFabric] = useState("cotton");

  const handleChange = (e) => {
    setMeasurements({ ...measurements, [e.target.name]: e.target.value });
  };

  const handleFabricChange = (e) => {
    setFabric(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add product to cart with measurements and fabric
    dispatch(addItemsToCart(product._id, quantity, measurements.chest, measurements.arms, measurements.length, measurements.neckSize, fabric));
    alert.success("Item Added To Cart");
  };

  return (
    <div style={{ margin: "0 auto", padding: "40px", maxWidth: "600px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} className="etailor-form">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>E Tailor Form ({product.name})</h2>
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
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div className="form-group">
          <label>Fabric:</label>
          <div>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                name="fabric"
                value="cotton"
                checked={fabric === "cotton"}
                onChange={handleFabricChange}
              />
              Cotton
            </label>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                name="fabric"
                value="denim"
                checked={fabric === "denim"}
                onChange={handleFabricChange}
              />
              Denim
            </label>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                name="fabric"
                value="fleece"
                checked={fabric === "fleece"}
                onChange={handleFabricChange}
              />
              Fleece
            </label>
          </div>
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", borderRadius: "4px", border: "none", cursor: "pointer" }}>
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default ETailorForm;

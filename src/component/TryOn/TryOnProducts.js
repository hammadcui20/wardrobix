import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import axios from "axios";

const TryOnProducts = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('https://model-z7ix.onrender.com/try-on', {
        image_path: product.images[0].url
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <Link className="productCard">
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
      <button className="btn btn-primary" onClick={handleClick}>Try On</button>
    </Link>
  );
};

export default TryOnProducts;

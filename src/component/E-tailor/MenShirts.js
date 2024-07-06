
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import EtailerProductCard from '../Home/EtailerProductCard';
import Navbar from '../Navbar/Navbar';

function MenShirts() {
  const [shirts, setShirts] = useState([]);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/men/shirts'); // Adjust the API endpoint as per your backend
      setShirts(response.data); // Assuming the data is an array of shirt objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = async (shirtId, selectedColor, selectedSize) => {
    try {
      await axios.post(`/api/men/shirts/${shirtId}/select`, {
        color: selectedColor,
        size: selectedSize
      });
      console.log('Color and size selection saved successfully!');
    } catch (error) {
      console.error('Error saving color and size selection:', error);
    }
  };

  return (
    <div>
    <Navbar/>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        products && products.length > 0 ? (
          products.map((product) => (
            <EtailerProductCard key={product._id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )
      )}
    </div>
    </div>
  );
}

export default MenShirts;

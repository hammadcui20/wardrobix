


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ShirtByCategory = () => {
  const [shirts, setShirts] = useState([]);
  const [categoryHeading, setCategoryHeading] = useState('');
  const { category } = useParams();

  useEffect(() => {
    const fetchShirtsByCategory = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000/api/v1/shirts/category/${category}`);
        const response = await axios.get(`https://backend-ward-4.onrender.com/api/v1/shirts/category/${category}`);
        setShirts(response.data.data);

        // Set the category heading based on the category
        setCategoryHeading(category === 'men' ? "Men's Shirts" : "Women's Shirts");
      } catch (error) {
        console.error('Error fetching shirts by category:', error);
      }
    };

    fetchShirtsByCategory();
  }, [category]);

  return (
    <div className="page-container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div className="header" style={{marginBottom:"20px"}}>
        <h1>{categoryHeading}</h1>
      </div>
      <div className="shirts-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {shirts.map((shirt) => (
          <Card key={shirt._id} style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={`/api/shirts/${shirt._id}/image`} alt={shirt.name} /> */}
            <Card.Img variant="top" src='shirt3.jpg' alt={shirt.name} style={{ width: '100px', height: '80px' }} />
            <Card.Body>
              <Card.Title>{shirt.name}</Card.Title>
              <Card.Text>
                {shirt.color}, {shirt.gender}, Size: {shirt.size}
              </Card.Text>
              <Link to={`/shirt/${shirt._id}`} className="btn btn-primary">More Details</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShirtByCategory;


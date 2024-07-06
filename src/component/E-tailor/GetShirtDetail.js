// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const GetShirtDetail = () => {
//   const [shirt, setShirt] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     size: {
//       chest: '',
//       neck: '',
//       arm: ''
//     },
//   });
//   const { shirtId } = useParams();

//   useEffect(() => {
//     const fetchShirtDetail = async () => {
//       try {
//         console.log(shirtId)
//         const response = await axios.get(`http://localhost:4000/api/v1/shirts/${shirtId}`);
//         setShirt(response.data.data);
//       } catch (error) {
//         console.error('Error fetching shirt detail:', error);
//       }
//     };

//     fetchShirtDetail();
//   }, [shirtId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, size: { ...formData.size, [e.target.name]: e.target.value } });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Retrieve user ID from local storage
//       const userId = localStorage.getItem('userId');

//       // Add user ID to the formData
//       const requestData = { ...formData };

//       // Submit the request to the backend API
//       await axios.post(`http://localhost:4000/api/v1/shirt/${shirtId}/request`, requestData);
//     //   `http://localhost:4000/api/v1/shirts/category/${category}
//       // Reset form data and toggle visibility
//       setFormData({
//         size: {
//           chest: '',
//           neck: '',
//           arm: ''
//         },
//       });
//       setShowForm(false);
//     } catch (error) {
//       console.error('Error submitting request:', error);
//     }
//   };

//   if (!shirt) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {showForm ? (
//         <div>
//           <h2>Submit Request</h2>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="chest">Chest Size:</label>
//               <input type="text" id="chest" name="chest" value={formData.size.chest} onChange={handleChange} required />
//             </div>
//             <div>
//               <label htmlFor="neck">Neck Size:</label>
//               <input type="text" id="neck" name="neck" value={formData.size.neck} onChange={handleChange} required />
//             </div>
//             <div>
//               <label htmlFor="arm">Arm Size:</label>
//               <input type="text" id="arm" name="arm" value={formData.size.arm} onChange={handleChange} required />
//             </div>
//             <button type="submit">Submit</button>
//             <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
//           </form>
//         </div>
//       ) : (
//         <div>
//             {console.log(shirt)}
//           <h2>{shirt.name}</h2>
//           <img src= "shirt2.jpg" alt={shirt.name}  />
//           <p>Color: {shirt.color}</p>
//           <p>Gender: {shirt.gender}</p>
//           <p>Size: Chest: {shirt.size.chest}, Neck: {shirt.size.neck}, Arm: {shirt.size.arm}</p>
//           <p>Price: {shirt.price}</p>
//           <button onClick={() => setShowForm(true)}>Submit Request</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetShirtDetail;


// last 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// const GetShirtDetail = () => {
//   const [shirt, setShirt] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     size: {
//       chest: '',
//       neck: '',
//       arm: ''
//     },
//   });
//   const { shirtId } = useParams();

//   // Fetch shirt details based on shirtId
//   useEffect(() => {
//     const fetchShirtDetail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/v1/shirts/${shirtId}`);
//         setShirt(response.data.data);
//       } catch (error) {
//         console.error('Error fetching shirt detail:', error);
//       }
//     };

//     fetchShirtDetail();
//   }, [shirtId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, size: { ...formData.size, [e.target.name]: e.target.value } });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const requestData = { ...formData };
//       await axios.post(`http://localhost:4000/api/v1/shirt/${shirtId}/request`, requestData);

//       // Reset form data and set formSubmitted to true
//       setFormData({
//         size: {
//           chest: '',
//           neck: '',
//           arm: ''
//         },
//       });
//       setFormSubmitted(true);
//       setShowForm(false);
//     } catch (error) {
//       console.error('Error submitting request:', error);
//     }
//   };

//   if (!shirt) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
//       <div>
//         {/* Shirt Detail */}
//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="shirt1.jpg" />
//           <Card.Body>
//             <Card.Title>{shirt.name}</Card.Title>
//             <Card.Text>
//               Color: {shirt.color}<br />
//               Gender: {shirt.gender}<br />
//               Size: Chest: {shirt.size.chest}, Neck: {shirt.size.neck}, Arm: {shirt.size.arm}<br />
//               Price: {shirt.price}
//             </Card.Text>
//             {!formSubmitted && (
//               <Button variant="primary" onClick={() => setShowForm(true)}>Submit Request</Button>
//             )}
//             {formSubmitted && (
//               <Button variant="success">Add to Cart</Button>
//             )}
//           </Card.Body>
//         </Card>
//       </div>
      
//       {/* Form */}
//       {showForm && !formSubmitted && (
//         <div>
//           <h2>Submit Request</h2>
//           <Form onSubmit={handleSubmit}>
//             <Row className="mb-3" style={{flexDirection:"column"}}>
//               <Form.Group as={Col} md="4" controlId="validationCustom01" style={{width:"100%"}}>
//                 <Form.Label>Chest Size</Form.Label>
//                 <Form.Control required type="text" name="chest" value={formData.size.chest} onChange={handleChange} />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationCustom02 "style={{width:"100%"}} >
//                 <Form.Label>Neck Size</Form.Label>
//                 <Form.Control required type="text" name="neck" value={formData.size.neck} onChange={handleChange} />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationCustom03" style={{width:"100%"}}>
//                 <Form.Label>Arm Size</Form.Label>
//                 <Form.Control required type="text" name="arm" value={formData.size.arm} onChange={handleChange} />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//             </Row>
//             <Button type="submit">Submit</Button>
//           </Form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetShirtDetail;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const GetShirtDetail = () => {
  const [shirt, setShirt] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    size: {
      chest: '',
      neck: '',
      arm: ''
    },
  });
  const { shirtId } = useParams();

  // Fetch shirt details based on shirtId
  useEffect(() => {
    const fetchShirtDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/shirts/${shirtId}`);
        setShirt(response.data.data);
      } catch (error) {
        console.error('Error fetching shirt detail:', error);
      }
    };

    fetchShirtDetail();
  }, [shirtId]);

  const handleChange = (e) => {
    setFormData({ ...formData, size: { ...formData.size, [e.target.name]: e.target.value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = { ...formData };
      // await axios.post(`http://localhost:4000/api/v1/shirt/${shirtId}/request`, requestData);
      await axios.post(`https://backend-ward-4.onrender.com/api/v1/shirt/${shirtId}/request`, requestData);

      // Reset form data and set formSubmitted to true
      setFormData({
        size: {
          chest: '',
          neck: '',
          arm: ''
        },
      });
      setFormSubmitted(true);
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  if (!shirt) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:"column"}}>
      {/* Header */}
      <h2 style={{ marginBottom: '1rem' }}>Shirt Detail</h2>
      <div   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , gap:"3rem" }}>

      
      {/* Shirt Detail */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="shirt1.jpg" />
          <Card.Body>
            <Card.Title>{shirt.name}</Card.Title>
            <Card.Text>
              Color: {shirt.color}<br />
              Gender: {shirt.gender}<br />
              Size: Chest: {shirt.size.chest}, Neck: {shirt.size.neck}, Arm: {shirt.size.arm}<br />
              Price: {shirt.price}
            </Card.Text>
            {!formSubmitted && (
              <Button variant="primary" onClick={() => setShowForm(true)}>Submit Request</Button>
            )}
            {formSubmitted && (
              <Button variant="success">Add to Cart</Button>
            )}
          </Card.Body>
        </Card>
      </div>
      
      {/* Form */}
      {showForm && !formSubmitted && (
        <div style={{ width: '18rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Submit Request</h3>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3" style={{ flexDirection: "column" }}>
              <Form.Group as={Col} md="4" controlId="validationCustom01" style={{ width: "100%" }}>
                <Form.Label>Chest Size</Form.Label>
                <Form.Control required type="text" name="chest" value={formData.size.chest} onChange={handleChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02 " style={{ width: "100%" }} >
                <Form.Label>Neck Size</Form.Label>
                <Form.Control required type="text" name="neck" value={formData.size.neck} onChange={handleChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03" style={{ width: "100%" }}>
                <Form.Label>Arm Size</Form.Label>
                <Form.Control required type="text" name="arm" value={formData.size.arm} onChange={handleChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      )}
    </div>
    </div>
  );
};

export default GetShirtDetail;

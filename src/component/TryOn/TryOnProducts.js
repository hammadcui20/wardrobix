import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TryOnProducts = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userImage, setUserImage] = useState(null);
  const history = useHistory();
  
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
      
      const response = await axios.post('https://model-z7ix.onrender.com/try-on', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Assuming the API returns the image data as base64 string
      const imageData = response.data.image; // Adjust according to your API response

      // Navigate to the new route with the processed image
      history.push('/processed-image', { processedImage: imageData });
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
      
      <button className="btn btn-primary button" onClick={handleOpen}>Try On</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Your Image
          </Typography>
          <input type="file" accept="image/*" onChange={handleUserImageChange} />
          <button className="btn btn-primary button" onClick={handleClick}>
            Submit
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default TryOnProducts;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Custom styles

import img1 from '../../images/img5.png';
import img2 from '../../images/img6.png';
import img3 from '../../images/img7.png';

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      emulateTouch={true}
    >
      <div  className="item"> 
        <img src={img1} alt="Slide 1" />
        <div className="carousel-caption">
          <h1 style={{fontSize:"40px",fontStyle:"revert-layer"}}>Summer Sale!</h1>
          <p style={{fontSize:"40px",color:"white",fontFamily:"sans-serif"}}> "Brighten up your summer wardrobe with amazing discounts on our latest collection. Find everything you need at unbeatable prices."</p>
        </div>
      </div>
      <div className="item">
        <img src={img2} alt="Slide 2" />
        <div className="carousel-caption">
        <h1 style={{fontSize:"40px",fontStyle:"revert-layer"}}>Virtual Try-On</h1>
          
        </div>
      </div>
      <div className="item">
        <img src={img3} alt="Slide 3" />
        <div className="carousel-caption">
        <h1 style={{fontSize:"40px",fontStyle:"revert-layer"}}>E-tailoring</h1>
                  </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

import React, { Fragment, useEffect } from "react";
// import { LuMousePointer2 } from "react-icons/lu";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import OwlCarouselComponent from './Carousel-owl.js'; // Adjust the path as necessary
import Navbar from "../Navbar/Navbar.js";

const Home = () => {
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





  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Wardrobix" />
      <Navbar/>
      <OwlCarouselComponent />
          {/* <div className="banner">
             <h1 style={{color:"black"}}>Welcome To Wardrobix</h1>
            <h1 style={{marginTop:"110px"}}>FIND AMAZING <span style={{color:"black"}}>PRODUCTS BELOW</span></h1>

            <a href="#container">
              <button>
                Scroll <LuMousePointer2 />
              </button>
            </a>
          </div> */}

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
          
     
    </Fragment>
  );
};

export default Home;

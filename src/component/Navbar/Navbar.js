import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Container,
  Wrapper,
  Left,
  NavLink,
  // Center,
  // Logo,
  Right,
  // Quantity,
  // QuantityContainer,
  // QuantityIcon,
  RegisterLink,
} from "./Navbar.styles.js";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <img style={{height:"70px",marginTop:"-15px",border:"1px solid gray",borderRadius:"10px"}} src="/logo.png" alt="Logo" />
            <Link to="/">
              <NavLink><button className="button">Home</button></NavLink>
            </Link>
            <Link to="/about">
              <NavLink><button className="button">About</button></NavLink>
            </Link>
            <Link to="/products">
              <NavLink><button className="button">Products</button></NavLink>
            </Link>
            {isAuthenticated && <Link to="/etailor"><button className="button">Etailor</button></Link>}
            {isAuthenticated && <Link to="/tryon"><button className="button">Virtual Try-On</button></Link>}
            <Link to="/contact">
              <NavLink><button className="button">Contact</button></NavLink>
            </Link>
          </Left>
    
          <Right>
            {!isAuthenticated && (
              <RegisterLink className="button" href="/login">
                Register
              </RegisterLink>
            )}
            {/* <QuantityContainer>
              {isAuthenticated &&
                <Link to="/cart">
                  <NavLink>
                    <QuantityIcon>
                      <MdOutlineShoppingCart
                        style={{
                          fontSize: "1.5rem",
                        }}
                      />
                    </QuantityIcon>
                  </NavLink>
                </Link>}
              <Quantity quantity={quantity}>{quantity}</Quantity>
            </QuantityContainer> */}
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;

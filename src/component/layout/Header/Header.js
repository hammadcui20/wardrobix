import { ReactNavbar } from "overlay-navbar";
import { Link } from "react-router-dom";
import logo from "../../../images/ROBIX LOGOS.jpg";
import { useSelector } from "react-redux";

const options = {
  burgerColor: "#eb4034",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Virtual Try On",
  link3Text: "Contact",
  link4Text: "Etailor",

  
  link1Url: "/",
  link2Url: "/tryon",
  link3Url: "/contact",
  link4Url: "/etailor",


  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <ReactNavbar {...options} />
      {!isAuthenticated && (
        <Link
          to="/login"
          style={{
            position: "absolute",
            top: "40px",
            right: "20px",
            color: "white",
          }}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default Header;

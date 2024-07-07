import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #ffecd2, #fcb69f)",
    padding: "20px",
  };

  const profileContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    width: "100%",
    margin: "20px 0",
  };

  const profileInfoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "20px",
    flex: 1,
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    marginTop: "10px",
  };

  const buttonLinkStyle = {
    display: "inline-block",
    padding: "10px 20px",
    color: "#fff",
    background: "#007bff",
    borderRadius: "5px",
    textDecoration: "none",
    margin: "5px 0",
  };

  return (
    <Fragment>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div style={containerStyle}>
          <MetaData title={`${user.name}'s Profile`} />
          <div style={profileContainerStyle}>
            <div>
              <h1>My Profile</h1>
              <img
                src={user.avatar.url}
                alt={user.name}
                style={{ width: "150px", borderRadius: "50%" }}
              />
              <Link to="/me/update" style={buttonLinkStyle}>
                Edit Profile
              </Link>
            </div>
            <div style={profileInfoStyle}>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
              <div>
                <Link to="/orders" style={linkStyle}>
                  My Orders
                </Link>
                <Link to="/password/update" style={linkStyle}>
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;

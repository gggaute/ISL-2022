import React from "react";
import logo from "../../assets/images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * This is a component for the navigation bar at the top of the page.
 * @author Synne, Guri
 * @returns Component containing the "Norsk for Ungdom" logo and the home-text and button.
 */
const Navbar = () => {
  return (
    <div className="bar">
      <div className="left-div">
        <img
          id="logo"
          src={logo}
          onClick={() => {
            window.open(
              "https://www.ntnu.edu/learnnowyouth/info/welcome",
              "_blank"
            );
          }}
          alt="Norsk for Ungdom logo."
          width="130"
        ></img>
      </div>
      <div className="right-div">
          <Link to='/' className="link" style={{ textDecoration: 'none', color: '#2261a8' }}>
          <h3 id="navbarTitle"> Hjem </h3>
          </Link>
          <IconButton alt="An icon of a house." className="routeButton" data-testid="idButton" component={Link} to="/">
            <HomeIcon style={{color: '#2261a8'}}/>
          </IconButton>
      </div>
    </div>
  );
};

export default Navbar;

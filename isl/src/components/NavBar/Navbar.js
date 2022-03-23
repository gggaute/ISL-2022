import React from "react";
import logo from "../../assets/img/logo.png";
import { FcPrevious, FcNext } from "react-icons/fc";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

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
          alt="Norsk for Ungdom logo"
          width="130"
        ></img>
      </div>
      <div className="mid-div"></div>
      <div className="right-div">
          <Link to='/' className="link" style={{ textDecoration: 'none', color: '#2261a8' }}>
          <h3 id="navbarTitle"> Hjem </h3>
          </Link>
          <IconButton className="routeButton" data-testid="idButton" component={Link} to="/">
            <HomeIcon style={{color: '#2261a8'}}/>
          </IconButton>
      </div>
    </div>
  );
};

export default Navbar;

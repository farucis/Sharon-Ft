import React from "react";
import "./NavBar.css";

import NabBarMenu from "./NabBarMenu";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaWaze, FaInstagramSquare, FaPhoneSquare } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="navBar-container">
        <div className="n-logo" ></div>
      <div className="contact-buttones">
        <a
          //href={`https://waze.com/ul?ll=${this.state.linkLat},${this.state.linkLng}&navigate=yes`}
          //target="_blank"
        >
          <FaWaze />
        </a>
        <a href="">
          <FaInstagramSquare />
        </a>
        <a href="">
          <FaPhoneSquare />
        </a>
      </div>
      <i onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <GiHamburgerMenu /> : <GrClose />}
      </i>
      {isOpen && <NabBarMenu />}
    </div>
  );
};

export default NavBar;

import React from "react";
import $ from "jquery";
import "./NavBar.css";

import SideBarMenu from "./components/SideBarMenu";
import NavBarHeader from "./components/NavBarHeader";
import { opacityByScroling } from "./components/Function";
import MenuIcon from "./components/MenuIcon";

const NavBar = () => {
  $(window).scroll(opacityByScroling);

  return (
    <section id='navBar'>
      <NavBarHeader />
      <MenuIcon />
      <label className="overlyy"></label>
      <SideBarMenu />
    </section>
  );
};

export default NavBar;

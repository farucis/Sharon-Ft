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
    <div>
      <NavBarHeader />
      <MenuIcon />
      <label className="overlyy"></label>
      <SideBarMenu />
    </div>
  );
};

export default NavBar;

import { map } from "jquery";
import React from "react";
import "./NabBarMenu.css";

const NabBarMenu = () => {
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="overly">
      <div className="menu-container">
        <div className="buttons-container">
          {items.map((item, index) => {
            return (
              <div className="menu-button">
                <li>{item}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NabBarMenu;

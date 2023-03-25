import React from "react";
import "./NabBarMenu.css";

const NabBarMenu = () => {
  const items = [
    "?מי אני",
    "קצת על הסטודיו",
    "תגובות של לקוחות",
    "חבילות אימונים",
    "צור קשר",
  ];
  return (
    <div className="overly">
      <div className="menu-container">
        <div className="buttons-container">
          {items.map((item, index) => {
            return (
              <div className="menu-button" key={index}>
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

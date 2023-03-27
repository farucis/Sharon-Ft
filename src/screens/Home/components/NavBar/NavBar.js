import React from "react";
import "./NavBar.css";

import { FaWaze, FaInstagramSquare, FaPhoneSquare } from "react-icons/fa";

const Test = () => {
  const items = [
    "?מי אני",
    "קצת על הסטודיו",
    "תגובות של לקוחות",
    "חבילות אימונים",
    "צור קשר",
  ];
  return (
    <div>
      <div class="header">
      <div className="n-logo"></div>
      <div className="contact-buttones">
        <a target="_blank" rel="noreferrer" href="https://ul.waze.com/ul?preview_venue_id=22806840.228002868.613111&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
          <FaWaze />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/invites/contact/?i=x7ikcv5pitc5&utm_content=uf68p%E2%80%8E%E2%80%8F">
          <FaInstagramSquare />
        </a>
        <a target="_blank" rel="noreferrer" href="https://wa.me/message/EZX2HIMY3WDRM1">
          <FaPhoneSquare />
        </a>
      </div>
      </div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <label className="overlyy" ></label>

      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li>
            שרון ליפוביץ אבוקסיס<span>מאמנת כושר</span>
          </li>
          {items.map((item, index) => {
            return (
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Test;

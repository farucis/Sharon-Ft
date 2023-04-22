import React from "react";
import $ from "jquery";
import "./NavBar.css";

import { FaWaze, FaInstagramSquare, FaPhoneSquare } from "react-icons/fa";

const NavBar = () => {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".header").css({
      opacity: function () {
        var elementHeight = $(this).height(),
          opacity =
            (1 - (elementHeight - scrollTop) / elementHeight) * 0.8 + 0.05;

        $(".sidebarIconToggle").css({
          opacity: function () {
            return opacity;
          },
        });
        return opacity;
      },
    });
  });
  const items = [
    { text: "?מי אני", herf: "AbutMe" },
    { text: "קצת על הסטודיו", herf: "AbutStudio" },
    { text: "תגובות של לקוחות", herf: "CustomersProcess" },
    { text: "חבילות אימונים", herf: "TrainingPackages" },
    { text: "צור קשר", herf: "ContactUs" },
  ];
  return (
    <div>
      <div className="header">
        <div className="n-logo"></div>
        <div className="contact-buttones">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ul.waze.com/ul?preview_venue_id=22806840.228002868.613111&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          >
            <FaWaze />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/invites/contact/?i=x7ikcv5pitc5&utm_content=uf68p%E2%80%8E%E2%80%8F"
          >
            <FaInstagramSquare />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/message/EZX2HIMY3WDRM1"
          >
            <FaPhoneSquare />
          </a>
        </div>
      </div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <label className="overlyy"></label>

      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>
            שרון ליפוביץ אבוקסיס<span>מאמנת כושר</span>
          </li>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.herf} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

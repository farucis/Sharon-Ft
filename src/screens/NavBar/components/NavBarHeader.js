import React from "react";
import { FaWaze, FaInstagramSquare, FaPhoneSquare } from "react-icons/fa";

const NavBarHeader = () => {
  return (
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
      </div>{" "}
    </div>
  );
};

export default NavBarHeader;

import React from "react";
import "./ContactUsIcons.css";
import $ from "jquery";

import { FaWhatsapp, FaInstagram, FaWaze } from "react-icons/fa";
import { fadeInIcons } from "../Functions";

const ContactUsIcons = () => {
  $(window).scroll(fadeInIcons);
  return (
    <div className="contactUs-icons-container">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/message/EZX2HIMY3WDRM1"
      >
        <div className="contactUs-icon-card">
          <h3>שליחת הודעה </h3>
          <FaWhatsapp />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/invites/contact/?i=x7ikcv5pitc5&utm_content=uf68p%E2%80%8E%E2%80%8F"
      >
        <div className="contactUs-icon-card">
          <h3>מעקב באינסטגרם</h3>
          <FaInstagram />
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://ul.waze.com/ul?preview_venue_id=22806840.228002868.613111&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
      >
        <div className="contactUs-icon-card">
          <h3>הכוונה לסטודיו</h3>
          <FaWaze />
        </div>
      </a>
    </div>
  );
};

export default ContactUsIcons;

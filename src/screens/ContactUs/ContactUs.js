import React from "react";
import "./ContactUs.css";

import ContactUsIcons from "./components/ContactUsIcons/ContactUsIcons";
import EmailInputArea from "./components/EmailInputArea/EmailInputArea";

const ContactUs = () => {
  return (
    <section id="ContactUs" className="contactUs-container">
      <div className="contactUs-logo" />
      <ContactUsIcons />
      <EmailInputArea />
    </section>
  );
};

export default ContactUs;

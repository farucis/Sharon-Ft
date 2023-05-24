import React from "react";
import "./EmailInputArea.css";
import $ from "jquery";
import { fadeInEmailCard, sendEmail } from "../Functions";

const EmailInputArea = () => {
  $(window).scroll(fadeInEmailCard);

  const formHandler = (e) => {
    !e.target.name.value ||
    !e.target.user_email.value ||
    !e.target.message.value
      ? e.preventDefault()
      : sendEmail(e);
  };

  return (
    <div className="contact-input-container">
      <div className="contact-input">
        תשאירי פרטים ואחזור אלייך
        <form
          id="contact-form"
          name="contact-form"
          onSubmit={formHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <input type="text" name="name" placeholder="שם מלא" />
          <input type="email" name="user_email" placeholder="אימייל" />
          <textarea name="message" placeholder="הקלד את ההודעה " />

          <button type="submit" className="btn">
            שלח
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailInputArea;

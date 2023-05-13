import React from "react";
import "./EmailInputArea.css";

import emailjs from "emailjs-com";
import { serviceID, templateID, userID } from "./emailjsKey";

const EmailInputArea = () => {
  const inputsValid = [true, true, true];

  const formHandler = (e) => {
    //e.target["name"].value.length < 1 && setInputsValid([false, true, true]);
    //e.target["user_email"].value.length < 1 && setInputsValid([true, false, true]);
    //e.target["message"].value.length < 1 && setInputsValid([true, true, false]);

    console.log(inputsValid);
    inputsValid.nameInput && inputsValid.emailinput && inputsValid.messageInput
      ? sendEmail(e)
      : e.preventDefault();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result);
        e.target.reset();
      },
      (error) => {
        //console.log(error);
      }
    );

    //document.forms["contadctForm"].reset();
  };

  return (
    <div className="contact-input-container">
      <div className="contact-input">
        תשאירי אימייל ואחזור אלייך
        <form
          id="contact-form"
          name="contact-form"
          onSubmit={formHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <input type="text" name="name" placeholder="הכנס שם מלא" />
          <input type="email" name="user_email" placeholder="הכנס אימייל" />
          <textarea name="message" placeholder="הקלד את ההודעה שלך" />

          <button type="submit" className="btn primary-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailInputArea;

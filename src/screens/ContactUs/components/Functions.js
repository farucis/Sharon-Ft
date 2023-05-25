import $ from "jquery";
import emailjs from "emailjs-com";
import { serviceID, templateID, userID } from "./EmailInputArea/emailjsKey";
import { addAnimationToClass } from "../../AboutMe/components/TrainingMethod/components/Function";

export const formHandler = (e) => {
  e.target.name.value.length > 2 &&
  e.target.user_email.value.length > 2 &&
  e.target.message.value.length > 2
    ? sendEmail(e)
    : e.preventDefault();
};

export const sendEmail = (e) => {
  emailjs.sendForm(serviceID, templateID, e.target, userID).then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const fadeInEmailCard = () => {
  const height =
    $(".contactUs-icons-container").offset().top -
    $(".contactUs-container").height();

  if ($(window).scrollTop() <= height)
    for (let i = 0; i < 3; i++)
      addAnimationToClass(".contact-input", "zoom-in-right", 0.6, height, 1);
};

export const fadeInIcons = () => {
  const height =
    $(".contactUs-icons-container").offset().top -
    $(".contactUs-container").height() -
    $(".contactUs-icons-container").height();

  if ($(window).scrollTop() <= height)
    for (let i = 0; i < 3; i++)
      addAnimationToClass(
        `.contactUs-icons-container a:nth-child(${i + 1})`,
        "fade-in",
        0.3 * (i + 1),
        height
      );
};

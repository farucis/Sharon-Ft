import $ from "jquery";

export const nextTrainHandler = () => {
  const location = $(`#ContactUs`).offset().top;

  window.scrollTo({
    top: location,
    behavior: "smooth",
  });
};

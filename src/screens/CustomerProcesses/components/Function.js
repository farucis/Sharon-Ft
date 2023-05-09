import $ from "jquery";

export const loadImagesByOffset = () => {
  for (let i = 1; i <= $(".image-container").length; i++) {
    const imageTop =
      $(`.image-container:nth-child(${i})`).offset().top - $(window).height();

    $(`.image-container:nth-child(${i})`).css({
      animation: function () {
        if ($(window).scrollTop() > imageTop - 10) {
          return `fade-in-up-bounce 800ms ${0.14 * i}s linear both`;
        } else {
          return "none";
        }
      },
    });
  }
};

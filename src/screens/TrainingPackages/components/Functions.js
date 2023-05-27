import $ from "jquery";

export const loadCardsByOffset = () => {
  for (let i = 1; i <= $(".tilesWrap li").length; i++) {
    const cardTOP =
      $(`.tilesWrap li:nth-child(${i})`).offset().top - $(window).height();

    $(`.tilesWrap li:nth-child(${i})`).css({
      animation: function () {
        if ($(window).scrollTop() > cardTOP ) {
          return `slide-in-left 400ms ${0.25 * i}s linear both`;
        } else {
          return "none";
        }
      },
    });
  }
};

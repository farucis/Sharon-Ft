import $ from "jquery";

export const opacityByScroling = () => {
  var scrollTop = $(window).scrollTop();
  $(".header").css({
    opacity: function () {
      var elementHeight = $(".header").height() + 50,
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
};

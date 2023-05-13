import $ from "jquery";

export const addAnimationToClass = (
  classNameSelect,
  animationName,
  dealy,
  height,
  duration = 0.7
) => {
  var scrollTop = $(window).scrollTop();
  $(`${classNameSelect}`).css({
    animation: function () {
      if (scrollTop >= height - 50)
        return `${animationName} ${duration}s ${dealy}s linear both`;
      else {
        return "none";
      }
    },
  });
};

export const scrollToTrainingOffset = () => {
  const trainingMethodHeight =
    $(".png-image-text").offset().top - $(".png-image-text").height() * 2;

  addAnimationToClass(
    ".png-image-text",
    "fade-in-left",
    0,
    trainingMethodHeight
  );
  addAnimationToClass(
    ".self-image-container button",
    "fade-in",
    1,
    trainingMethodHeight
  );
  var stages = Math.round($(".method-stages").height());

  addAnimationToClass(
    ".stages-title",
    "scale",
    0.1,
    trainingMethodHeight + stages,
    1.6
  );

  for (let i = 0; i < $(".stages-title span").length; i++)
    addAnimationToClass(
      `.stages-title span:nth-child(${i + 1})`,
      "fade-in-blur",
      i === 0 ? 0.8 : 0.1 * i,
      trainingMethodHeight + stages,
      0.8
    );
  for (let i = 0; i < 3; i++)
    addAnimationToClass(
      `#s${i + 1}`,
      window.innerWidth > 1000 ? "fade-in-up" : "fade-in-left",
      0.7 * i + 1,
      trainingMethodHeight + stages
    );
};

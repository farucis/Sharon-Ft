import $ from "jquery";
import SELFIMAGES from "../../../../../assets/pictures/SELFIMAGES";

export const galleryImagesScrolling = () => {
  var sideFlag = true;
  var leftPos = 0;
  var dealy = 800;
  setInterval(() => {
    if (leftPos < 0) {
      leftPos = 0;
    } else if (leftPos === 0) {
      sideFlag = true;
      leftPos += 100;
      dealy = 800;
    } else if (leftPos < 266 * (SELFIMAGES.length - 1) && leftPos > 0) {
      sideFlag ? (leftPos += 266) : (leftPos -= 266);
      dealy = 800;
    } else if (leftPos > 266 * (SELFIMAGES.length - 1)) {
      sideFlag = false;
      leftPos -= 266;
      dealy = 0;
    } /// <<<-----
    $(".gallery-images").delay(dealy).animate({ scrollLeft: leftPos }, 2000);
  });
};

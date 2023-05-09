import React from "react";
import "./SlidebarGallery.css";
import $ from "jquery";

const SlidebarGallery = (props) => {
  $(document).mouseup(function (e) {
    var container = $(".Gallery-container");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".slidebar-gallery-container").hide();
    }
  });
  return (
    <div className="slidebar-gallery-container">
      <ul className="Gallery-container">
        {props.images.map((image, index=props.i) => {
          return (
            <div key={index}>
              <input
                key={index}
                type="radio"
                name="radio-btn"
                id={`img-${index}`}
                checked
              />
              <li id="img-container">
                <div id="img-inner">
                  <img src={image} alt="reloud" />
                </div>
                <label
                  htmlFor={
                    index === 0
                      ? `img-${props.images.length - 1}`
                      : `img-${index - 1}`
                  }
                  className="sb-bignav"
                  title="הקודם"
                >
                  &#x276E;
                </label>
                <label
                  className="sb-bignav"
                  onClick={() => $(".slidebar-gallery-container").hide()}
                  title="סגור"
                >
                  &#x78;
                </label>
                <label
                  htmlFor={
                    index === props.images.length - 1
                      ? `img-0`
                      : `img-${index + 1}`
                  }
                  className="sb-bignav"
                  title="הבא"
                >
                  &#x276F;
                </label>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SlidebarGallery;

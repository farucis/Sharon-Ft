import React from "react";
import $ from "jquery";

const SideBarMenu = () => {
  const optionClickHandler = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = $(`#${target}`).offset().top;

    $("#openSidebarMenu").prop("checked", false);

    window.scrollTo({
      top: location - 44,
      behavior: "smooth",
    });
  };
  return (
    <div id="sidebarMenu">
      <ul className="sidebarMenuInner">
        <li>
          שרון ליפוביץ אבוקסיס<span>מאמנת כושר</span>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.herf} onClick={optionClickHandler}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarMenu;

const items = [
  { text: "?מי אני", herf: "AbutMe" },
  { text: "קצת על הסטודיו", herf: "AboutStudio" },
  { text: "תגובות של לקוחות", herf: "CustomersProcess" },
  { text: "חבילות אימונים", herf: "TrainingPackages" },
  { text: "צור קשר", herf: "ContactUs" },
];

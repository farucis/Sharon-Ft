import React from "react";

const SideBarMenu = () => {
  return (
    <div id="sidebarMenu">
      <ul className="sidebarMenuInner">
        <li>
          שרון ליפוביץ אבוקסיס<span>מאמנת כושר</span>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.herf} target="_blank" rel="noreferrer">
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
  { text: "קצת על הסטודיו", herf: "AbutStudio" },
  { text: "תגובות של לקוחות", herf: "CustomersProcess" },
  { text: "חבילות אימונים", herf: "TrainingPackages" },
  { text: "צור קשר", herf: "ContactUs" },
];

import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { menu } from "./Menu";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <div className="sidebar__body">
        {menu?.map((menuItems, index) => (
          <SidebarOption key={index} name={menuItems.category} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState } from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ name, handleClick }) {
  const [hover, setHover] = useState(false);
  const [{ currentSelection }, dispatch] = useDataLayerValue();

  return (
    <div
      className="sidebarOption"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        dispatch({
          type: "SET_SELECTION",
          currentSelection: name,
        })
      }
      style={hover ? { background: "lightgray" } : {}}
    >
      <h4>{name}</h4>
    </div>
  );
}

export default SidebarOption;

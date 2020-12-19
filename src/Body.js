import React, { useEffect, useState } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import MenuItem from "./MenuItem";

function Body({ menu }) {
  const [{ currentSelection }, dispatch] = useDataLayerValue();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(
      menu?.reduce(
        (prev, curr) => (
          curr.category === currentSelection && prev.push(curr.items), prev
        ),
        []
      )
    );

    console.log(menuItems[0]);
  }, [currentSelection]);

  return (
    <div className="body">
      {currentSelection ? (
        menuItems[0]?.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))
      ) : (
        <h1>Please choose a category from the side menu.</h1>
      )}
    </div>
  );
}

export default Body;

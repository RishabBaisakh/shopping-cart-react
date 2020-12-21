import React, { useEffect, useState } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import MenuItem from "./MenuItem";
import { menu } from "./Menu";

function Body() {
  const [{ currentSelection }] = useDataLayerValue();
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
  }, [currentSelection]);

  return (
    <div className="body">
      {currentSelection ? (
        menuItems[0]?.map((menuItem, index) => (
          <MenuItem key={index} menuItem={menuItem} />
        ))
      ) : (
        <h1>Please choose a category from the side menu</h1>
      )}
    </div>
  );
}

export default Body;

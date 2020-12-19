import React, { useEffect } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";

function Body({ menu }) {
  const [{ currentSelection }, dispatch] = useDataLayerValue();

  useEffect(() => {
    console.log(currentSelection);
  }, [currentSelection]);

  console.log(menu);

  return (
    <div className="body">
      {currentSelection ? (
        <div className="body__itemCard">
          <h1>{currentSelection}</h1>
        </div>
      ) : (
        <h1>Please choose a category from the side menu.</h1>
      )}
    </div>
  );
}

export default Body;

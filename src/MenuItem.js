import React from "react";
import "./MenuItem.css";

function MenuItem({ name, description, price }) {
  return (
    <div className="menuItem">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Price: {price.toFixed(2)}$</p>
    </div>
  );
}

export default MenuItem;

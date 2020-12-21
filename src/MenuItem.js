import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./MenuItem.css";

function MenuItem({ menuItem }) {
  const [{ cartItems }, dispatch] = useDataLayerValue();

  let newItems = cartItems;

  const addToCart = () => {
    newItems.push(menuItem);

    dispatch({
      type: "ADD_TO_CART",
      cartItems: newItems,
    });
  };

  console.log("cartItems => ", cartItems);

  return (
    <div className="menuItem">
      <div className="menuItem__header">
        <h1>{menuItem.name}</h1>

        <p>
          <strong>Price</strong>: ${menuItem.price.toFixed(2)}
        </p>
      </div>

      <p>{menuItem.description}</p>
      <div className="menuItem__addButton" onClick={addToCart}>
        <p>Add to Cart</p>
      </div>
    </div>
  );
}

export default MenuItem;

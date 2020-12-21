import React from "react";
import "./Cart.css";
import { useDataLayerValue } from "./DataLayer";

function Cart() {
  const [{ cartItems }] = useDataLayerValue();
  let total = 0;

  return (
    <div className="cart">
      <div className="cart__left">
        {cartItems.length ? (
          <div className="cart__items">
            {cartItems?.map((item, index) => {
              total += item.price;

              console.log("total => ", total);

              return (
                <div key={index} className="cart__item">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>The cart is empty!</h1>
        )}
      </div>

      <div className="cart__right">
        <div className="cart__rightTotal">
          <h3>Total Amount Due</h3>
          <p>${total}</p>
          <div className="cart__rightCheckoutButton">
            <p>Proceed to Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

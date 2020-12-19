import React from "react";
import "./Header.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FastfoodIcon />
        <h3>Food It Be</h3>
      </div>

      <div className="header__right">
        <div className="header__rightCartItems">
          <p>!</p>
        </div>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;

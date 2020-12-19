import React from "react";
import "./Header.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h3>Food It Be</h3>
        <FastfoodIcon />
      </div>

      <div className="header__right">
        <div className="header__rightCartItems">
          <p>1</p>{" "}
        </div>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;

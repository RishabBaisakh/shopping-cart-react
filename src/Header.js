import React from "react";
import "./Header.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useDataLayerValue } from "./DataLayer";
import { Link } from "react-router-dom";

function Header() {
  const [{ cartItems }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <FastfoodIcon />
          <h3>Food It Be</h3>
        </div>
      </Link>

      <Link to="/cart">
        <div className="header__right">
          {cartItems.length ? (
            <>
              <div className="header__rightCartItems">
                <p>{cartItems.length}</p>
              </div>
              <ShoppingCartIcon />
            </>
          ) : (
            <RemoveShoppingCartIcon />
          )}
        </div>
      </Link>
    </div>
  );
}

export default Header;

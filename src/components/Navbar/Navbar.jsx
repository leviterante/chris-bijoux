import React from "react";
import {
  FavoriteBorder,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";

import "./style.css";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <div className="app_nav">
      <div className="app_nav-left">
        <img src={images.logo_black} alt="Logo" />
        <p>Christine</p>
      </div>
      <div className="app_nav-center">
        <a href="#" className="products">
          Produits
        </a>
      </div>
      <div className="app_nav-right">
        <ul className="menuItems">
          <li className="item wishlist">
            <FavoriteBorder className="icon" />
          </li>
          <li className="item search">
            <Search className="icon" />
          </li>
          <li className="item cart">
            <ShoppingBagOutlined className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

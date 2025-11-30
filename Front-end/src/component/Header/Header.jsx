import { useState } from "react";
import "./Header.css";
import {
  EllipsisVertical,
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

import Logo from "./img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  const menuFlagHandle = () => {
    menuFlag ? setMenuFlag(false) : setMenuFlag(true);
  };
  const SwitchTo = useNavigate();
  return (
    <>
      <div className="headerLayout ">
        <div className="innerLayout ">
          <div className=" logoLayout">
            <img src={Logo} alt="logo" />
          </div>

          <div className="linksContainer">
            <NavLink to="/" className="linkWordStyle">
              Home
            </NavLink>
            <NavLink to="/contact" className="linkWordStyle">
              Contact
            </NavLink>
            <NavLink to="about" className="linkWordStyle">
              About
            </NavLink>
            <NavLink to="/CreateAccount" className="linkWordStyle">
              Sign UP
            </NavLink>
          </div>

          <div className="handContainer ">
            <div className="searchBtnHolder">
              <input
                id="searchHeader"
                placeholder="Search"
                className="searchBtnStyle"
                type="text"
              />
              <label htmlFor="searchHeader" className="relatedIdeaLayout">
                <Search />
              </label>
            </div>

            <div
              className="relatedIdeaLayout"
              onClick={() => {
                SwitchTo("/Whishlist");
              }}
            >
              {" "}
              <Heart />
            </div>
            <div className="relatedIdeaLayout"
              onClick={() => {
                SwitchTo("/Cart");
              }}>
              <ShoppingCart />
            </div>
            <div className="relatedIdeaLayout">
              {" "}
              <User />
            </div>
            <div
              className="relatedIdeaLayout menuLayout"
              onClick={() => {
                menuFlagHandle();
              }}
            >
              <EllipsisVertical />
            </div>
          </div>
        </div>
      </div>
      {menuFlag && <NavbarMobile />}
    </>
  );
};
export default Header;

import { NavLink } from "react-router-dom";
import "./NavbarMobile.css";
const NavbarMobile = () => {
  return (
    <div className="navMobileLayout bg-light">
      <a href="#" className="linkUnitStyle active">Home</a>
      <a href="#" className="linkUnitStyle">Contact</a>
      <a href="#" className="linkUnitStyle">About</a>
      <a href="#" className="linkUnitStyle">Sign UP</a>
    </div>
  );
};

export default NavbarMobile;

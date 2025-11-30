import { useState } from "react";
import "./Footer.css";

import Play from "./img/play.png";
import Qr from "./img/qr.png";
import App from "./img/app.png";
const Footer = () => {
  const siteName = "Pes cart";
  const [theme] = useState({
    bgColor: "#000000",
    textColor: "#ffffff",
    borderColor: "#ffffff",
  });
  return (
    <div
      style={{
        height: "fit-content",
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
      className={`footer container-fluid  m-auto w-100 gap-2  p-3 mt-5`}>
      <div className="unit">
        <span className="h5 mb-2">{siteName}</span>
        <span>subscribe</span>
        <span>Get 10% off your first order</span>

<div className="position-relative mt-2 w-75">
  <input type="email" name="userEmail" className="p-2"
    id="userEmail" placeholder="Enter your email"
    style={{
      fontSize: "12px",width: "100%",height: "32px",paddingRight: "30px", 
       borderColor: theme.borderColor,backgroundColor: theme.bgColor,
       color: "inherit",borderRadius: "4px",
      }}/>

  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"fill="currentColor" viewBox="0 0 16 16"
    style={{
      position: "absolute",right: "8px",top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",color: theme.textColor
      }}>
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.123l-3.8-5.3-.227-.378a.188.188 0 0 0-.276-.118l-.504-.252L.154 8.286a.75.75 0 0 1 .123-1.329l14.547-5.819a.5.5 0 0 1 .54.11L15.854.146ZM6.764 10.378 12 5.094l-5.236-1.571-3.693 5.178 3.693 1.571Z" />
  </svg>
</div>


      </div>
      <div className="unit">
        <span className="h5 mb-2">Support</span>
        <span>Egypt, Beni Suef, El-Zohor St.</span>
        <span>pescart@gmail.com</span>
        <span>+88015-88888-9999</span>
      </div>
      <div className="unit">
        <span className="h5 mb-2">Account</span>
        <div className="footer-btn-links-to">My Account</div>
        <div className="footer-btn-links-to">Login / Register</div>
        <div className="footer-btn-links-to">Cart</div>
        <div className="footer-btn-links-to">Wishlist</div>
        <div className="footer-btn-links-to">Shop</div>
      </div>
      <div className="unit">
        <span className="h5 mb-2">Quick Link</span>
        <div className="footer-btn-links-to">Privacy Policy</div>
        <div className="footer-btn-links-to">Terms Of Use</div>
        <div className="footer-btn-links-to">FAQ</div>
        <div className="footer-btn-links-to">About</div>
        <div className="footer-btn-links-to">Contact</div>
        
      </div>

      <div className="unit">
        <span className="h5 mb-2">Download App</span>
        <div className="footer-btn-links-to text-white-50">Save $3 with App New User Only</div>
        <div className="container">
          <div className="row ">
            <div className="col-6 d-flex flex-column align-items-center">
              <img src={Qr} alt="QR Code" style={{ width: "100%" , height:"73%",display:"block"}} />
            </div>
            <div className="col-6  d-flex flex-column align-items-center gap-3 ps-2">
              <img src={Play} alt="Play Store" style={{ width: "100%" ,height:"auto"}} />
              <img src={App} alt="App Store" style={{ width: "100%", height:"auto" }} />
            </div>
          </div> 
           <div className="d-flex align-items-center justify-content-start social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>     
        </div>
      </div>
      <div className="bg-black text-center text-white-50 pt-3 w-100 border-top border-dark border-50">
          <p className="mb-0 ">
           &copy; Copyright 2025. All rights reserved
          </p>
      </div>   
         
    </div>

  );
};
export default Footer;

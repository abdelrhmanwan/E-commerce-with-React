import React, { useEffect, useState } from "react";
import FloatingPageAddress from "../../component/floatingPageAddress/floatingPageAddress";
import "./Checkout.css";
import bkash from "./img/bkash.png";
import Cash from "./img/cash.png";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <>
      <FloatingPageAddress hideSource={"Home /"} currentSource={"Checkout"} />

      <div className="container py-5 mt-5 p-5">
        <div className="row">
          {/* Billing Details */}
          <div className="col-md-6">
            <h3 className="mb-4">Billing Details</h3>
            <form className=" w-75 form-abdo">
              <div className="mb-3">
                <label className="form-label">First Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Street Address<span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Town/City<span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number<span className="text-danger">*</span></label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address<span className="text-danger">*</span></label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" defaultChecked/>
                <label className="form-check-label ms-3 fw-semibold save-info">
                  Save information 
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="col-md-6 mt-3">

            {cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.img} width={70} alt="product-img" />
                  <span className="fw-semibold">{item.name}</span>
                </div>
                <span>${item.price * item.qty}</span>
              </div>
            ))}

            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
              <span className="fw-semibold">Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
              <span className="fw-semibold">Shopping:</span>
              <span>Free</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 py-3">
              <span className="fw-semibold">Total:</span>
              <span>${subtotal}</span>
            </div>

            <div className="mt-4">
              <div className="form-check mb-2 d-flex align-items-center gap-2 justify-content-between bank">
                <div className="form-check mb-2 ">
                  <input className="form-check-input" type="radio" name="payment"/>
                  <label className="form-check-label ms-3 fw-semibold">Bank</label>
                </div>
                <div className="payment-icons mb-2 d-flex gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" width={40} height={40} alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width={40} height={40} alt="Mastercard" />
                  <img src={bkash} width={40} height={40} alt="Bkash" />
                  <img src={Cash} width={40} height={40} alt="Cash" />
                </div>
              </div>

              <div className="form-check mb-2">
                <input className="form-check-input input-form" type="radio" name="payment" defaultChecked/>
                <label className="form-check-label ms-3 fw-semibold">Cash on delivery</label>
              </div>
            </div>

            <div className="d-flex mt-4">
              <input type="text" className="form-control input-form w-60 p-2 Apply-checkout" placeholder="Coupon Code" />
              <a href="#" className="btn btn-danger ms-3 p-1 w-50 Apply-checkout">Apply Coupon</a>
            </div>

            <button onClick={() => alert("Order Placed!")} className="btn btn-danger mt-4 p-2 w-50  Place-Order">
              Place Order 
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import FloatingPageAddress from "../../component/floatingPageAddress/floatingPageAddress";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Gamepad from "./img/Gamepad.png";
import HGamepad from "./img/HGampad.png";

export default function CartPage() {
  const navigate = useNavigate();

  // Products state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: Gamepad },
    { id: 2, name: "H1 Gamepad", price: 550, qty: 1, img: HGamepad },
  ]);

  // Handle quantity change
  const handleQtyChange = (id, value) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, qty: Number(value) } : item))
    );
  };
  // Handle item removal
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};
  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Proceed to Checkout
  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/checkout");
  };

  return (
    <>
      <FloatingPageAddress hideSource={"Home /"} currentSource={"Cart"} />
      <Container className="p-5 cartLayout">
        {/* Cart Table */}
        <Table borderless responsive className="cart-table align-middle">
          <thead className="border-bottom"> 
          <tr>
              <th className="pb-2">Product</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center gap-3 pb-3">
                    <img src={item.img} width={70} alt="product-img" />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  <Form.Control
                    type="number"
                    min="1" max=".."
                    value={item.qty}
                    className="quantity-input w-25"
                    onChange={e => handleQtyChange(item.id, e.target.value)}/>
                </td>
                <td>${item.price * item.qty}</td>
                <td>
                  <span style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleRemove(item.id)}>
                    <i className="fa-solid fa-trash fs-5"></i>
                  </span>
                </td>
              </tr>  
              ))}
          </tbody>
        </Table>

        {/* buttons */}
        <div className="d-flex justify-content-between mt-4 mb-5 pb-5">
          <a href="#" className="btn btn-dark p-2 fw-semibold">Return To Shop</a>
          <button onClick={() =>{
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert("Cart Updated!"); }} 
            className="btn btn-success p-2 fw-semibold">
             Update Cart
          </button>
        </div>

        {/* Coupon + Summary */}
        <Row className="mt-5">
          <Col sm={12} md={6} lg={6} className="pb-3 pt-3">
            <div className="d-flex gap-3 pe-5">
              <Form.Control type="text" placeholder="Coupon Code" className=" w-75 Apply-Cart" />
              <button  className="btn btn-danger  fw-semibold w-50 Apply-Cart">Apply Coupon</button>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6} className="pb-3 pt-3">
            <div className="border p-4 rounded cart-total-box">
              <h5 className="fw-bold mb-3 text-center-none">Cart Total</h5>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Shopping:</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between fw-bold py-3">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <div className="text-center">
                <button onClick={handleCheckout}className="btn btn-danger p-2 fw-semibold w-50 Apply-Cart">
                   Proceed to checkout
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

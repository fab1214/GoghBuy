import React from "react";
import Subtotal from "../components/Subtotal";

function Cart() {
  return (
    <div className="cart">
      <div className="cart_left">
        <h2>Your Shopping Basket</h2>
      </div>
    
      <div className="cart_right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Cart;

import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext.js";
import ReactDOM from "react-dom";

const Modal = React.forwardRef((props, ref) => {
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return ReactDOM.createPortal(
    <dialog ref={ref} className="modal cart">
      <h2>Your cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity}
              </p>
            </li>
          ))
        ) : (
          <li className="cart-item">No items in cart</li>
        )}
      </ul>
      <p className="cart-total">
        {new Intl.NumberFormat("et-EE", {
          style: "currency",
          currency: "EUR",
        }).format(total)}
      </p>
      <p className="modal-actions">
        <button className="text-button" onClick={() => ref.current?.close()}>
          Close
        </button>
        <button
          className="button"
          onClick={() => {
            ref.current?.close();
            setTimeout(() => setCart([]), 0);
          }}
        >
          Checkout
        </button>
      </p>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
//{}[]

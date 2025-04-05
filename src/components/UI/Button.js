import React, { useContext, useRef } from "react";
import { CartContext } from "../CartContext.js";
import Modal from "./Modal.js";

const Button = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const modalRef = useRef(null);

  const addToCart = (newItem) => {
    const existingItem = cart.find((item) => item.id === newItem.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...newItem, quantity: 1 }];
    }

    setCart(updatedCart);
  };

  const showModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      {props.textOnly ? (
        <button className="text-button" onClick={showModal}>
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
      ) : (
        <button className="button" onClick={() => addToCart(props.meal)}>
          Add to Cart
        </button>
      )}
      <Modal ref={modalRef} />
    </>
  );
};

export default Button;

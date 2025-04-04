import React, { useContext } from "react";
import { CartContext } from "../CartContext.js";

const Button = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (newItem) => {
    const existingItem = cart.find(item => item.id === newItem.id);
  
    if (existingItem) {
      return cart.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...cart, { ...newItem, quantity: 1 }];
    }
  };

  return props.textOnly ? (
    <button className="text-button">Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</button>
  ) : (
    <button
      className="button"
      onClick={() => {
        const updatedCart = addToCart(props.meal);
        setCart(updatedCart);
        console.log(updatedCart);
      }}
    >
      Add to Cart
    </button>
  );
};

export default Button;
//{}

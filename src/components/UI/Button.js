import React from "react";

const Button = (props) => {
  return props.textOnly ? (
    <button className="text-button">Cart (0)</button>
  ) : (
    <button className="button">Add to Cart</button>
  );
};

export default Button;

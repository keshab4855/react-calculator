import React from "react";

const Button = ({ className, label, handleOnClick }) => {
  return (
    <button
      onClick={() => {
        handleOnClick(label);
      }}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;

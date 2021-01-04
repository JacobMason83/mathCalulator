import React from "react";

const Button = (props) => {
  return (
    <div
      className="button-wrapper"
      onClick={() => {
        props.handleClick(props.children);
      }}
    >
      <button>{props.children}</button>
    </div>
  );
};

export default Button;

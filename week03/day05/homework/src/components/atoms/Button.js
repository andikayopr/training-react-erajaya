import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}
    size="medium"
  >
    {props.title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
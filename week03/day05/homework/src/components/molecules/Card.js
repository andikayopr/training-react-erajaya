import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card__column">
      <div className="card__header">{props.title}</div>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

Card.defaultProps = {
  children: "",
};

export default Card;

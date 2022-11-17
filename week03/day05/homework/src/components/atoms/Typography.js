import React from "react";
import PropTypes from "prop-types";

const Typography = (props) => {
  switch (props.variant) {
    case "header":
      return <h2>{props.children}</h2>;
    case "title":
      return <h4>{props.children}</h4>;
    case "subtitle":
      return <h5>{props.children}</h5>;
    default:
      return <>{props.children}</>
  }
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

Typography.defaultProps = {
  variant: "body",
};

export default Typography;
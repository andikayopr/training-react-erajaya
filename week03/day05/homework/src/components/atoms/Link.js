import React from "react";
import PropTypes from "prop-types";

const Link = (props) => {
  return <a href={props.href}>{props.title}</a>;
};

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired
};

Link.defaultProps = {
  href: "#",
};

export default Link;

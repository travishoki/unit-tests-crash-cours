import React from "react";
import PropTypes from "prop-types";

export const ComponentA = ({ handleClick, value }) => (
  <button onClick={() => handleClick(value)} role="button">
    Click Me!
  </button>
);

ComponentA.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
};

export default ComponentA;

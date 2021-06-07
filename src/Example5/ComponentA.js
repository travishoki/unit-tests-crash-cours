import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ComponentA = ({
  handleClick,
}) => (
  <button
    onClick={handleClick}
    className="button"
  >Click Me!</button>
);

ComponentA.propTypes = {
  handleClick: PropTypes.func,
};

export default ComponentA;

import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ className = '', children, ...rest }) => (
  <ul className={`dropdown ${className}`} {...rest}>
    {children}
  </ul>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

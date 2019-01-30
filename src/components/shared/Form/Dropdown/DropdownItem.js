import React from 'react';
import PropTypes from 'prop-types';

export const DropdownItem = ({ className = '', children, ...rest }) => (
  <li className={`dropdown-item ${className}`} {...rest}>
    {children}
  </li>
);

DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

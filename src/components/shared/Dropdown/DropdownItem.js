import React from 'react';

export const DropdownItem = ({ className, ...props }) => (
  <li className={`dropdown-item ${className || ''}`} {...props} />
);

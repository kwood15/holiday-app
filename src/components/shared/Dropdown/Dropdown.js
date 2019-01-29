import React from 'react';

export const Dropdown = ({ className, ...props }) => (
  <ul className={`dropdown ${className || ''}`} {...props} />
);

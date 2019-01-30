import React from 'react';
import PropTypes from 'prop-types';

export const RadioGroup = ({ className = '', children, ...rest }) => (
  <div className={`control ${className}`} {...rest}>
    {children}
  </div>
);

RadioGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

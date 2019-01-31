import React from 'react';
import PropTypes from 'prop-types';

export const RadioLabel = ({
  className = '', children, htmlFor, ...rest
}) => (
  <label htmlFor={htmlFor} className={`control__label ${className}`} {...rest}>
    {children}
  </label>
);

RadioLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

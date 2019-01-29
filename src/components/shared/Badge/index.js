import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ className, text, ...props }) => (
  <span className={`badge ${className || ''}`} {...props}>
    {text}
  </span>
);

Badge.defaultProps = {
  className: ''
};

Badge.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Badge;

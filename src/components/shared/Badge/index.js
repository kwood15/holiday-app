import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ className, text, ...rest }) => (
  <span className={`badge ${className}`} {...rest}>
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

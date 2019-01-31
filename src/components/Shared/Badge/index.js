import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ className, children, ...rest }) => (
  <span className={`badge ${className}`} {...rest}>
    {children}
  </span>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Badge;

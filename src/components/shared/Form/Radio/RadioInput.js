import React from 'react';
import PropTypes from 'prop-types';

export const RadioInput = ({
  id,
  className = '',
  name,
  value,
  onChange,
  checked,
  disabled,
  ...rest
}) => (
  <>
    <input
      type="radio"
      id={id}
      className={`control__input ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      {...rest}
    />
    <div className={`control__indicator ${className}`} />
  </>
);

RadioInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

import React from 'react';
import PropTypes from 'prop-types';

export default function GenericFormInput(props) {
  const {
    type,
    name,
    value,
    labelText,
    onChange,
  } = props;

  return (
    <label htmlFor={ name } data-testid={ `${name}-input-label` }>
      { labelText }
      <input
        type={ type }
        name={ name }
        id={ name }
        data-testid={ `${name}-input` }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

GenericFormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

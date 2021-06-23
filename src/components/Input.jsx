import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, label, onChange, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { label }
        {
          type === 'textarea' && (
            <textarea
              value={ value }
              onChange={ onChange }
              name={ name }
              data-testid={ `${name}-input` }
            />)
        }
        {
          type !== 'textarea' && (
            <input
              type={ type }
              value={ value }
              onChange={ onChange }
              data-testid={ `${name}-input` }
              name={ name }
            />
          )
        }

      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      text,
      test,
      name,
      value,
      change,
      type,
      checked,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ (test === '') ? `${name}-input-label` : `${test}-label` }
      >
        { text }
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ (value !== undefined) ? value : checked }
          checked={ checked }
          onChange={ change }
          data-testid={ (test === '') ? `${name}-input` : test }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  test: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  checked: PropTypes.bool,
  change: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  test: '',
  value: undefined,
  checked: false,
};

export default Input;

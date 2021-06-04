import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      htmlFor,
      dataTestidLabel,
      valueLabel,
      dataTestidInput,
      handleInput,
      valueInput,
      placeholder,
      name,
    } = this.props;

    return (
      <label htmlFor={ htmlFor } data-testid={ dataTestidLabel }>
        {valueLabel}
        <input
          type={ type }
          data-testid={ dataTestidInput }
          onChange={ handleInput }
          placeholder={ placeholder }
          name={ name }
          value={ valueInput }
        />
      </label>
    );
  }
}
Input.propTypes = {
  type: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  valueLabel: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  valueInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: '',
  valueInput: '',
  placeholder: '',
};
export default Input;

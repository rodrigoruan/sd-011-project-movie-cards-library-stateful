import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const {
      typeTxt,
      elementText,
      id,
      testIdLabel,
      testIdInput,
      name,
      value,
      func,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ testIdLabel }
      >
        { elementText }
        <input
          type={ typeTxt }
          id={ id }
          data-testid={ testIdInput }
          name={ name }
          value={ value }
          onChange={ func }
        />
      </label>
    );
  }
}

InputText.defaultProps = {
  typeTxt: 'text',
  elementText: '',
  id: '',
  testIdLabel: '',
  testIdInput: '',
  name: '',
  value: '',
  func: () => {},
};

InputText.propTypes = {
  typeTxt: PropTypes.string,
  elementText: PropTypes.string,
  id: PropTypes.string,
  testIdLabel: PropTypes.string,
  testIdInput: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  func: PropTypes.func,
};

export default InputText;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextField extends Component {
  render() {
    const { name, title, type, value, func } = this.props;
    return (
      <label htmlFor={ name }>
        {title}
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ func }
        />
      </label>

    );
  }
}

export default InputTextField;

InputTextField.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  func: PropTypes.func,
};

InputTextField.defaultProps = {
  name: '',
  title: '',
  type: '',
  value: '',
  func: () => {},
};

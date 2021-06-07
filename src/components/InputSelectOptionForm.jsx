import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelectOptionForm extends Component {
  render() {
    const {
      text,
      value,
      dataTestid,
    } = this.props;

    return (
      <option value={ value } data-testid={ dataTestid }>{text}</option>
    );
  }
}

InputSelectOptionForm.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  dataTestid: PropTypes.string,
}.isRequired;

export default InputSelectOptionForm;

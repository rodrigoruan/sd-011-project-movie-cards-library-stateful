import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="new-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="new-title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}
export default InputText;

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

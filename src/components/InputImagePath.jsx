import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="new-image" data-testid="image-input-label">
        Imagem
        <input
          name="image"
          id="new-image"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}
export default InputImagePath;

InputImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

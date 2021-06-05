import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePathForm extends Component {
  // prettier-ignore
  render() {
    const { imagePath, onChangeHandler } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          onChange={ onChangeHandler }
          value={ imagePath }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePathForm.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

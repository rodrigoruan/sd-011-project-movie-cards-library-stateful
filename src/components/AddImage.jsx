import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddImage extends Component {
  render() {
    const { imagePath, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem:
          <input
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ handleChanges }
          />
        </label>
      </div>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

export default AddImage;

import React from 'react';
import PropTypes from 'prop-types';

class LabelImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
          className="input-box"
        />
      </label>
    );
  }
}

LabelImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelImage;

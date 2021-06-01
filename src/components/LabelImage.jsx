import React from 'react';
import PropTypes from 'prop-types';

class LabelImage extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ imagePath }
          data-testid="image-input"
        />
      </label>
    );
  }
}

LabelImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default LabelImage;

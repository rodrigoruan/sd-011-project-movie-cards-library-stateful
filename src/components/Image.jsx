import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
    return (
      <label
        htmlFor="image-input-label"
        data-testid="image-input-label"
      >
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ functionOnChange }
        />
      </label>
    );
  }
}
Image.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};
export default Image;

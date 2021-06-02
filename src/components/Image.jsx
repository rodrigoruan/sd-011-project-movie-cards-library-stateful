import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="image-id" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image-id"
          type="text"
          placeholder="Digite a URL do folder do filme"
          data-testid="image-input"
          value={ value }
          onChange={ inputRead }
        />
      </label>
    );
  }
}

Image.propTypes = {
  inputRead: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Image;

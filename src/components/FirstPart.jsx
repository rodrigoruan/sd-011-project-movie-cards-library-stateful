import React from 'react';
import PropTypes from 'prop-types';

class FirstPart extends React.Component {
  render() {
    const { handleChange, title, subtitle, imagePath } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            value={ title }
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            value={ subtitle }
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            value={ imagePath }
            name="imagePath"
            type="text"
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

FirstPart.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FirstPart;

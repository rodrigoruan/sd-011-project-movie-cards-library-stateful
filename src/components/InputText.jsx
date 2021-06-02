import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleInputChange } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            onChange={ handleInputChange }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            onChange={ handleInputChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            onChange={ handleInputChange }
            value={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="30"
            rows="10"
            onChange={ handleInputChange }
            value={ storyline }
          />
        </label>
      </>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

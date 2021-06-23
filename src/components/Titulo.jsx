import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, salvarAlteracao } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ salvarAlteracao }
            name="title"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={ salvarAlteracao }
            value={ subtitle }
            name="subtitle"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ salvarAlteracao }
            name="imagePath"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ salvarAlteracao }
          />
        </label>
      </div>
    );
  }
}

Titulo.propTypes = {
  salvarAlteracao: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
}.isRequired;

export default Titulo;

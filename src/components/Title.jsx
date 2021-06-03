import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, subtitle, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="Adiciona Filme" data-testid="title-input-label">
          Título
          <input
            name="Title"
            id="Adiciona Texto"
            data-testid="title-input"
            type="text"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Adiciona Subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="Subtitle"
            id="Adiciona Subtitulo"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Adiciona Sinopse" data-testid="storyline-input-label">
          Sinopse
          <input
            Name="sinopse"
            id="Adiciona Sinopse"
            data-testid="storyline-input"
            type="text"
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Title;

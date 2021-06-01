import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" data-testid="storyline-input" />
        </label>
        <label htmlFor data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" defaultValue="0" />
        </label>
        <label htmlFor data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.element.isRequired,
};

export default AddMovie;

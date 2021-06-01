import React from 'react';
// import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const onClick = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input value={ title } onChange={ title } data-testid="title-input" />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            value={ subtitle }
            onChange={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input value={ imagePath } onChange={ imagePath } data-testid="image-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            onChange={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            value={ rating }
            onChange={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ genre } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAddMovie onClick={ onClick } />
      </form>
    );
  }
}

export default AddMovie;

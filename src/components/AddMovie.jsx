import React from 'react';
import PropTypes from 'prop-types';

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

    this.reset = this.reset.bind(this);
  }

  reset() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" defaultValue={ title } />
        </label>
        <label htmlFor data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" defaultValue={ subtitle } />
        </label>
        <label htmlFor data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" defaultValue={ imagePath } />
        </label>
        <label htmlFor data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            data-testid="storyline-input"
            defaultValue={ storyline }
          />
        </label>
        <label htmlFor data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" defaultValue={ rating } />
        </label>
        <label htmlFor data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" defaultValue={ genre }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.reset }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

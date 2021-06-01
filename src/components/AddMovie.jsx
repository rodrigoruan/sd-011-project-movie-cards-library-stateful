// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  } // fim do constructor

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title } // this.state.title
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle } // this.state.subtitle
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath } // this.state.imagePath
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ storyline } // this.state.storyline
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <textarea
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating } // this.state.rating
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderGenreInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre } // this.state.genre
          onChange={ this.handleInputChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderFormButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          this.reset();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput() }
        { this.renderSubtitleInput() }
        { this.renderImagePathInput() }
        { this.renderStorylineInput() }
        { this.renderRatingInput() }
        { this.renderGenreInput() }
        { this.renderFormButton() }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
//   title: PropTypes.func.isRequired,
//   imagePath: PropTypes.bool.isRequired,
//   storyline: PropTypes.func.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.func.isRequired,
// };

export default AddMovie;

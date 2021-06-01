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
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.createTitleInput = this.createTitleInput.bind(this);
    this.createSubtitleInput = this.createSubtitleInput.bind(this);
    this.createImagePathInput = this.createImagePathInput.bind(this);
    this.createStorylineInput = this.createStorylineInput.bind(this);
    this.createRatingInput = this.createRatingInput.bind(this);
    this.createGenreInput = this.createGenreInput.bind(this);
    this.createButton = this.createButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
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

  createTitleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          id="title-input"
        />
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          id="subtitle-input"
        />
      </label>
    );
  }

  createImagePathInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          id="image-input"
        />
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          id="storyline-input"
        />
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          id="rating-input"
        />
      </label>
    );
  }

  createGenreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          id="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  createButton() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.resetState }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTitleInput(title) }
        { this.createSubtitleInput(subtitle) }
        { this.createImagePathInput(imagePath) }
        { this.createStorylineInput(storyline) }
        { this.createRatingInput(rating) }
        { this.createGenreInput(genre) }
        { this.createButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.movieAdd = this.movieAdd.bind(this);
    this.setAttribute = this.setAttribute.bind(this);
    this.addedMovie = this.addedMovie.bind(this);
    this.snpse = this.snpse.bind(this);
    this.genreOpt = this.genreOpt.bind(this);
  }

  setAttribute(inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.movieAdd }
        className="form-control"
      />
    );
  }

  movieAdd({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addedMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  snpse(inputName, inputType, inputValue) {
    return (
      <textarea
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid="storyline-input"
        onChange={ this.movieAdd }
        className="form-control"
      />
    );
  }

  genreOpt(inputName, inputValue) {
    return (
      <select
        name={ inputName }
        value={ inputValue }
        data-testid="genre-input"
        onChange={ this.movieAdd }
        className="form-control"
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <div className="mb-3">
            <label htmlFor="control" data-testid="title-input-label">
              Título
              { this.setAttribute('title', 'text', title) }
            </label>
            <label htmlFor="control" data-testid="subtitle-input-label">
              Subtítulo
              { this.setAttribute('subtitle', 'text', subtitle) }
            </label>
            <label htmlFor="control" data-testid="image-input-label">
              Imagem
              { this.setAttribute('imagePath', 'text', imagePath) }
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="control" data-testid="storyline-input-label">
              Sinopse
              { this.snpse('storyline', 'text', storyline) }
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="control" data-testid="rating-input-label">
              Avaliação
              { this.setAttribute('rating', 'number', rating) }
            </label>
            <label htmlFor="control" data-testid="genre-input-label">
              Gênero
              { this.genreOpt('genre', genre) }
            </label>
            <button
              className="btn btn-info"
              data-testid="send-button"
              type="button"
              onClick={ this.addedMovie }
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

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
    this.rst = this.rst.bind(this);
    this.snpse = this.snpse.bind(this);
  }

  setAttribute(inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.movieAdd }
      />
    );
  }

  movieAdd({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  rst() {
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
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
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
          <label htmlFor="control" data-testid="storyline-input-label">
            Sinopse
            { this.snpse('storyline', 'text', storyline) }
          </label>
          <label htmlFor="control" data-testid="rating-input-label">
            Avaliação
            { this.setAttribute('rating', 'number', rating) }
          </label>
          <label htmlFor="control" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.movieAdd }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            type="button"
            onClick={ () => { onClick(this.state); this.rst(); } }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

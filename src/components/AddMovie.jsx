// implement AddMovie component here
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

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.resetStateInputs = this.resetStateInputs.bind(this);
  }

  handleChangeInput({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  resetStateInputs() {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChangeInput }
              id="title"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChangeInput }
              id="subtitle"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChangeInput }
              id="imagePath"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangeInput }
              id="storyline"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChangeInput }
              id="rating"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              name="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChangeInput }
              id="genre"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.resetStateInputs }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

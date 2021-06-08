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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChangeInput }
            />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChangeInput }
            />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChangeInput }
            />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangeInput }
            />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChangeInput }
            />
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChangeInput }
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

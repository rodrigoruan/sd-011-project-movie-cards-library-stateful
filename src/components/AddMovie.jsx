import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = inicialState;
    this.handleState = this.handleState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleState({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  clearState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(inicialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            id="title-input"
            name="title"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            id="subtitle-input"
            name="subtitle"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ storyline }
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            id="rating-input"
            onChange={ this.handleState }
            max="5"
            min="0"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            id="genre-input"
            name="genre"
            onChange={ this.handleState }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={ this.clearState }
          type="submit"
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

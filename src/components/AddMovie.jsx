// implement AddMovie component here
import React, { Component } from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            defaultValue={this.state.genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button data-testid="send-button" onClick={onClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

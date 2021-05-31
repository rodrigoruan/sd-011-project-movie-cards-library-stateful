// implement AddMovie component here
import React, { Component } from 'react';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE;
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerIncludeMovie = this.handlerIncludeMovie.bind(this);
  }

  handlerChange({ target }) {
    const { value, name } = target;

    this.setState(() => ({
      [name]: value,
    }))
  }

  handlerIncludeMovie() {
    this.props.onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
          </label>
          <input 
           name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handlerChange}
          />
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input 
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handlerChange}
          />
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
          </label>
          <input 
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handlerChange}
          />
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handlerChange}
          />
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
          </label>
          <input 
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handlerChange}
          />
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
          </label>
          <select 
            name="genre"
            value={this.state.genre}
            onChange={this.handlerChange}
            data-testid="genre-input"
          >
          <option 
           value="action"
           data-testid="genre-option"
          >
            Ação
          </option>
          <option 
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option 
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
          </select>
          <button
            data-testid="send-button"
            onClick={this.handlerIncludeMovie}
          > 
          Adicionar filme
          </button>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.handleEvents = this.handleEvents.bind(this);
  }

  handleEvents({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ this.handleEvents }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input 
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleEvents }
           />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input name="imagePath" type="text" data-testid="image-input" onChange={ this.handleEvents } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" data-testid="storyline-input" onChange={ this.handleEvents } />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            defaultValue={ 0 }
            onChange={ this.handleEvents }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select name="genre" data-testid="genre-input" onChange={ this.handleEvents }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleEvents }>Adicionar filme</button>
      </form>
    );
  }
}

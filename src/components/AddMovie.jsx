// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderInputAtributte(inputName, inputType, inputValue) {
    return (
      <input
        name={ inputName }
        type={ inputType }
        value={ inputValue }
        data-testid={ inputName === 'imagePath' ? 'image-input' : `${inputName}-input` }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          <span>Título</span>
          { this.renderInputAtributte('title', 'text', title)}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          <span>Subtítulo</span>
          { this.renderInputAtributte('subtitle', 'text', subtitle)}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          <span>Imagem</span>
          { this.renderInputAtributte('imagePath', 'text', imagePath)}
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          <span>Sinopse</span>
          { this.renderInputAtributte('storyline', 'textarea', storyline)}
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <span>Avaliação</span>
          { this.renderInputAtributte('rating', 'number', rating)}
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <span>Gênero</span>
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

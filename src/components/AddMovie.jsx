import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            name="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

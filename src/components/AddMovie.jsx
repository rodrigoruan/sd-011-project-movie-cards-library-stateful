import React, { Component } from 'react';

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
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleMovie({ e }) {
    const { name, value } = e;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleId" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            id="titleId"
            type="text"
            value={ title }
            onChange={ this.handleMovie }
          />
        </label>
        <label htmlFor="subId" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subId"
            type="text"
            value={ subtitle }
            onChange={ this.handleMovie }
          />
        </label>
        <label htmlFor="imageId" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            id="imageId"
            type="text"
            value={ imagePath }
            onChange={ this.handleMovie }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
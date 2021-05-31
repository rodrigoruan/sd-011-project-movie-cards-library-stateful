import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleUserInput }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleUserInput }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleUserInput }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ this.handleUserInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

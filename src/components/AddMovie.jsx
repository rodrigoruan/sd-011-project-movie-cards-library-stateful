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
      // genre: 'action',
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, imagePath, rating, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="titleInput"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="titleInput"
            data-testid="title-input"
            onChange={ this.updateState }
            name={ title }
          />
        </label>
        <label
          htmlFor="subtitleInput"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="subtitleInput"
            data-testid="subtitle-input"
            onChange={ this.updateState }
            name={ subtitle }
          />
        </label>
        <label
          htmlFor="imageInput"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            id="imageInput"
            data-testid="image-input"
            onChange={ this.updateState }
            name={ imagePath }
          />
        </label>
        <label
          htmlFor="storylineInput"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storylineInput"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ this.updateState }
            name={ storyline }
          />
        </label>
        <label
          htmlFor="ratingInput"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            id="ratingInput"
            data-testid="rating-input"
            onChange={ this.updateState }
            name="rating"
            value={ rating }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

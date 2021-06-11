// implement AddMovie component here
import React, { Component } from 'react';

// const InitialState = {
//   title: '',
//   subtitle: '',
//   storyline: '',
//   rating: 0,
//   imagePath: '',
//   genre: 'action',
// };

class AddMovie extends Component {

  render() {
    return (
      <div>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input id="title-input" data-testid="title-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input id="subtitle-input" data-testid="subtitle-input" />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input id="image-input" data-testid="image-input" />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <input id="storyline-input" data-testid="storyline-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

import React, { Component } from 'react';

class AddMovieImage extends Component {
  constructor() {
    super();

    this.state = {
      imagePath: '',
    };

    this.createImagePath = this.createImagePath.bind(this);
  }

  createImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ this.createImagePath }
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default AddMovieImage;

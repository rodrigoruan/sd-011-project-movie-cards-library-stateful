import React, { Component } from 'react';

class AddMovie extends Component {
  renderTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input type="text" id="title-input" data-testid="title-input" />
      </label>
    );
  }

  renderSubTitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input id="subtitle-input" type="text" data-testid="subtitle-input" />
      </label>
    );
  }

  renderImagemInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input type="text" id="image-input" data-testid="image-input" />
      </label>
    );
  }

  renderTextAreaInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea id="storyline-input" data-testid="storyline-input" />
      </label>
    );
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          {this.renderTitleInput()}
          {this.renderSubTitleInput()}
          {this.renderImagemInput()}
          {this.renderTextAreaInput()}
        </form>
      </>
    );
  }
}

export default AddMovie;

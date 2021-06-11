import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input id="title-input" type="text" data-testid="title-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input id="subtitle-input" type="text" data-testid="subtitle-input" />
          </label>
        </form>
      </>
    );
  }
}

export default AddMovie;

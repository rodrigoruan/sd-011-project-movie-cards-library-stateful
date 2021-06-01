// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título:
          <input type="texto" data-testid="title-input" />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo:
          <input type="texto" data-testid="subtitle-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;

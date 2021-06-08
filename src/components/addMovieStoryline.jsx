import React, { Component } from 'react';

class addMovieStoryline extends Component {
  render() {
    const { storyline, handleMovie } = this.props;
    return (
      <label htmlFor="storylineId" data-testid="storyline-input-label">
        Imagem
        <textarea
          data-testid="storyline-input"
          id="storylineId"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default addMovieStoryline;
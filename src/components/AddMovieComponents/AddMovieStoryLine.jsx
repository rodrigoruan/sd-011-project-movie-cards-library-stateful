import React, { Component } from 'react';

class AddMovieStoryLine extends Component {
  render() {
    const { story, onStoryTextChange } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ story }
          onChange={ onStoryTextChange }
        />
      </label>
    );
  }
}

export default AddMovieStoryLine;

import React, { Component } from 'react';

class AddMovieTitle extends Component {
  constructor() {
    super();

    this.state = {
      storyline: '',
    };

    this.createStoryline = this.createStoryline.bind(this);
  }

  createStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.createStoryline }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default AddMovieTitle;

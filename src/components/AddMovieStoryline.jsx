import React, { Component } from 'react';

export default class AddMovieStoryline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

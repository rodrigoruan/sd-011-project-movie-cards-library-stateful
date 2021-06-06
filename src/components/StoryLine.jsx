import React, { Component } from 'react';

export default class StoryLine extends Component {
  render() {
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }
}

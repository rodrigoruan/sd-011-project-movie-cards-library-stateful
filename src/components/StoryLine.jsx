import React, { Component } from 'react';

export default class StoryLine extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          name="storyLine"
          data-testid="storyline-input-label"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

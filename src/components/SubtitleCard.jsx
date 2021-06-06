import React, { Component } from 'react';

class SubtitleCard extends Component {
  render() {
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }
}

export default SubtitleCard;

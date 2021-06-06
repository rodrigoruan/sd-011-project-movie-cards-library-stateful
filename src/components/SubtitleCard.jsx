import React, { Component } from 'react';

class SubtitleCard extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input-label"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default SubtitleCard;

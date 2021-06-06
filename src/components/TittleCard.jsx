import React, { Component } from 'react';

class TittleCard extends Component {
  render() {
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }
}

export default TittleCard;

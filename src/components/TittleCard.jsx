import React, { Component } from 'react';

class TittleCard extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input-label"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default TittleCard;

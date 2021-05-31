import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <label htmlFor="favoritos" data-testid="checkbox-input-label">
        Mostrar somente favoritos:
        <input type="checkbox" name="favoritos" data-testid="checkbox-input" />
      </label>
    );
  }
}

export default Checkbox;

import React, { Component } from 'react';

export default class InputTextArea extends Component {
  render() {
    return (
      <div>
        <label htmlFor="text-area" data-testid="storyline-input-label">
          Sinopse
          <textarea id="text-area" data-testid="storyline-input" />
        </label>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
    };
  }

  render() {
    const { start } = this.state;
    return (
      <div>
        <label htmlFor="input-number" data-testid="rating-input-label">
          Avaliação
          <input
            id="input-number"
            type="number"
            data-testid="rating-input"
            defaultValue={ start }
          />
        </label>
      </div>
    );
  }
}

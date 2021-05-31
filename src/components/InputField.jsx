import React, { Component } from 'react'

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="text-input"
          data-testid="text-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

import React, { Component } from 'react';

export default class InputSubitile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
    };
  }

  render() {
    const { subtitle } = this.state;
    const { handleChange } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          defaultValue={ subtitle }
          onChange={ handleChange }
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

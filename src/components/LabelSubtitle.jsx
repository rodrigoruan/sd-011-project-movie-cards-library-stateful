import React, { Component } from 'react';

class LabelSubtitle extends Component {
  render() {
    const { subtitle, handleStates } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelSubtitle;

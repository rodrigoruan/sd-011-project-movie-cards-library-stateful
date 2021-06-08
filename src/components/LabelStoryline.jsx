import React, { Component } from 'react';

class LabelStoryline extends Component {
  render() {
    const { storyline, handleStates } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelStoryline;

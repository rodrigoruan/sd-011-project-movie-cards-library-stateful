import React, { Component } from 'react';

class LabelTitle extends Component {
  render() {
    const { title, handleStates } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelTitle;

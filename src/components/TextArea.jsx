import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ func }
        />
      </label>
    );
  }
}

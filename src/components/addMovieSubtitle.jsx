import React, { Component } from 'react';

class addMovieSubtitle extends Component {
  render() {
    const { subtitle, handleMovie } = this.props;
    return (
      <label htmlFor="subId" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subId"
          type="text"
          value={ subtitle }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default addMovieSubtitle;
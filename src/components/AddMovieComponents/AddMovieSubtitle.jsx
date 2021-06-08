import React, { Component } from 'react';

class AddMovieSubtitle extends Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;

import React, { Component } from 'react';

class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, onSubtitleTextChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ onSubtitleTextChange }
          maxLength={ 190 }
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;

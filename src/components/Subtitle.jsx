import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="addMovieSubtitleInput">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="addMovieSubtitleInput"
          name="subtitle"
        />
      </label>
    )
  }
}

export default Subtitle;

import React from 'react';
import PropTypes from 'prop-types';

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
          onChange={ handleChange }
          id="addMovieSubtitleInput"
          name="subtitle"
        />
      </label>
    )
  }
}

export default Subtitle;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          name="subtitle"
          value={ subtitle }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default addMovieSubtitle;

addMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

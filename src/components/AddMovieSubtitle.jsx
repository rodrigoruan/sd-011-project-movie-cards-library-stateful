import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
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

export default AddMovieSubtitle;

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

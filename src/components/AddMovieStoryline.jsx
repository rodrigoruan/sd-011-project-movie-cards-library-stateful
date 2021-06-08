import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends Component {
  render() {
    const { storyline, handleMovie } = this.props;
    return (
      <label htmlFor="storylineId" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storylineId"
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default AddMovieStoryline;

AddMovieStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

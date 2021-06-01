import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse:
        <textarea
          name="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieStoryline;

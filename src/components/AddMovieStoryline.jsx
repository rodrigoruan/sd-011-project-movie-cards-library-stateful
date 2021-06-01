import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          onChange={ handleInputs }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieStoryline;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieStoryline extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

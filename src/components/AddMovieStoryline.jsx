import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieStoryline extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input-storyline">
        Sinopse
        <textarea
          name="storyline"
          id="input-storyline"
          cols="30"
          rows="10"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

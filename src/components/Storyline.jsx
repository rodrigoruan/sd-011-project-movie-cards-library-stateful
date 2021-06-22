import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-textarea-input" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          id="add-movie-textarea-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

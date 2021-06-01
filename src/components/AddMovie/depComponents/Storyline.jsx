import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-story" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="input-story"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

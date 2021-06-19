import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sinopse extends Component {
  render() {
    const { valueStoryline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ valueStoryline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Sinopse.propTypes = {
  valueStoryline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

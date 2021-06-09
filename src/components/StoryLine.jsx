import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyLine"
          data-testid="storyline-input"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string,
  handlerChange: PropTypes.func,
}.isRequired;

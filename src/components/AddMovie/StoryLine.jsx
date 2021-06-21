import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { storyline, onStoryTextChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ onStoryTextChange }
        />
      </label>
    );
  }
}

export default StoryLine;

StoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  onStoryTextChange: PropTypes.func.isRequired,
};

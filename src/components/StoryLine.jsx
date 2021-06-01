import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends Component {
  render() {
    const { storyLine, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyLine: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

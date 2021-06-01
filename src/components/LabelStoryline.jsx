import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelStoryLine extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="storylineInput" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          name="storyline"
          value={ value }
          onChange={ change }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

LabelStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default LabelStoryLine;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          data-testid="storyline-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default StoryLine;

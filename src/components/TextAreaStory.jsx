import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaStory extends Component {
  render() {
    const {
      value,
      inputFunction,
    } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <textarea
          name="storyLine"
          data-testid="storyline-input"
          value={ value }
          onChange={ inputFunction }
        />
        <br />
      </label>
    );
  }
}

TextAreaStory.propTypes = {
  value: PropTypes.string.isRequired,
  inputFunction: PropTypes.func.isRequired,
};

export default TextAreaStory;

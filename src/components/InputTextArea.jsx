import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTextArea extends Component {
  render() {
    const { value, func } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="stortyLine">
        Sinopse
        <textarea
          name="storyLine"
          data-testid="storyline-input"
          onChange={ func }
          value={ value }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

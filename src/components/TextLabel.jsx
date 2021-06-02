import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextLabel extends Component {
  render() {
    const { functionCall, value } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ functionCall }
        />
      </label>
    );
  }
}

TextLabel.propTypes = {
  value: PropTypes.string.isRequired,
  functionCall: PropTypes.func.isRequired,
};

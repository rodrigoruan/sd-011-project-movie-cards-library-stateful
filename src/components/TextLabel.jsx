import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextLabel extends Component {
  render() {
    const { func, value } = this.props;
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
          onChange={ func }
        />
      </label>
    );
  }
}

TextLabel.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

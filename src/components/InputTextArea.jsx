import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTextArea extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
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

InputTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

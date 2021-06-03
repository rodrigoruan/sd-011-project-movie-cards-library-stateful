import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { handleInitialValue, value } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          onChange={ handleInitialValue }
          value={ value }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

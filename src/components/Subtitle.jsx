import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { handleInitialValue, subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          onChange={ handleInitialValue }
          value={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

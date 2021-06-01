import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardSubtitle extends Component {
  render() {
    const { handleEvents, value } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ value }
          type="text"
          data-testid="subtitle-input"
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardSubtitle.propTypes = {
  handleEvents: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

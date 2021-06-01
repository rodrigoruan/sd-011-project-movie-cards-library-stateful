import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          id="subtitle-input"
          name="subtitle"
          value={ valueR }
          data-testid="subtitle-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

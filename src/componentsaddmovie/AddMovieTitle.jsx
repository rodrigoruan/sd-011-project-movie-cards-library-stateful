import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título:
        <input
          id="title-input"
          name="title"
          value={ valueR }
          data-testid="title-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

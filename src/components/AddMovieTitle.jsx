import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título:
        <input
          id="title-input"
          name="title"
          value={ valueProp }
          data-testid="title-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  valueProp: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

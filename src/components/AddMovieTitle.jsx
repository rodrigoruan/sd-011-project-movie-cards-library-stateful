import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-add">
        Título
        <input
          data-testid="title-input"
          id="title-add"
          type="text"
          name="title"
          value={ value }
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};

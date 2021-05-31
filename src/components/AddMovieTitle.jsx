import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title-input"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

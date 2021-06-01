import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="input-subtitle"
          value={ value }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="add-movie-title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

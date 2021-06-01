import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título:
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTitle;

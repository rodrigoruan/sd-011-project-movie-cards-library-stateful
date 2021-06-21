import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, onTitleTextChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ onTitleTextChange }
        />
      </label>
    );
  }
}

export default AddMovieTitle;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleTextChange: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { title, handleAddMovie } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="text">
        Título
        <input
          name="title"
          value={ title }
          data-testid="title-input"
          type="text"
          onChange={ handleAddMovie }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleAddMovie: PropTypes.func.isRequired,
};

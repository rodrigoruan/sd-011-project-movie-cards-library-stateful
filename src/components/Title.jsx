import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { addMovieFunction, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={ addMovieFunction }
          id="title"
          value={ value }
        />
      </label>
    );
  }
}

Title.propTypes = {
  addMovieFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

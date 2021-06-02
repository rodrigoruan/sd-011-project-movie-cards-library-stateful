import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { subtitle, handleAddMovie } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="text">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          type="text"
          onChange={ handleAddMovie }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleAddMovie: PropTypes.func.isRequired,
};

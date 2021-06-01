import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { addMovieFunction, value } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
      Subtítulo
      <input
        type="text"
        data-testid="subtitle-input"
        id="subtitle"
        onChange={ addMovieFunction }
        value={ subtitle }
      />
    </label>
    );
  }
}

Subtitle.propTypes = {
  addMovieFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

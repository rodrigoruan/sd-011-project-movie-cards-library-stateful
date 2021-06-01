import React from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends React.Component {
  render() {
    const { addMovieFunction, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          onChange={ addMovieFunction }
          value={ value }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  addMovieFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

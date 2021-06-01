import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardSinopse extends Component {
  render() {
    const { handleEvents } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardSinopse.propTypes = {
  handleEvents: PropTypes.func.isRequired,
};

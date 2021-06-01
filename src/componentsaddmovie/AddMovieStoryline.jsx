import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieStoryline extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse:
        <textarea
          name="storyline"
          id="sinopse"
          value={ valueR }
          onChange={ event }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

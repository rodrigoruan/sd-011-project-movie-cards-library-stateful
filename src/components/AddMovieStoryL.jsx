import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieStoryL extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse:
        <textarea
          name="storyline"
          id="sinopse"
          value={ valueProp }
          onChange={ event }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddMovieStoryL.propTypes = {
  valueProp: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

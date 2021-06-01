import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieStoryLine extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-add">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline-add"
          type="text"
          name="storyline"
          value={ value }
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};

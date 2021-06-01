import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-add">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-add"
          type="text"
          name="subtitle"
          value={ value }
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};

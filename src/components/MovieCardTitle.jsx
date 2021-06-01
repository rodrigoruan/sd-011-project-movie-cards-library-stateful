import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardTitle extends Component {
  render() {
    const { handleEvents } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardTitle.propTypes = {
  handleEvents: PropTypes.func.isRequired,
};

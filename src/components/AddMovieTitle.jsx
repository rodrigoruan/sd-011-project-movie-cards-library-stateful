import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTitle extends Component {
  render() {
    const { title, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título:
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ handleChanges }
          />
        </label>
      </div>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

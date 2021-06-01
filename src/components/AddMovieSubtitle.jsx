import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
          Subtítulo:
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ handleChanges }
          />
        </label>
      </div>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

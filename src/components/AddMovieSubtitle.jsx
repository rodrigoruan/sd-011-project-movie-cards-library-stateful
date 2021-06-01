import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subítulo:
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;

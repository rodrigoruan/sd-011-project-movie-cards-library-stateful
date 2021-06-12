import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ handleInputs }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;

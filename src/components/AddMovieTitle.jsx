import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          onChange={ handleInputs }
          data-testid="title-input"
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.string,
  handleInputs: PropTypes.func,
};

AddMovieTitle.defaultProps = {
  value: '',
  handleInputs: () => {},
};

export default AddMovieTitle;

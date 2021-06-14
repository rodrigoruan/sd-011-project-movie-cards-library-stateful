import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { title, changer } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          onChange={ changer }
          value={ title }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: propTypes.text,
  changer: propTypes.func,
}.isRequired;

AddMovieTitle.defaultProps = {
  title: '',
};

export default AddMovieTitle;

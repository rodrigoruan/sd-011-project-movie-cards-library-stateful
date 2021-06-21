import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Titulo
          <input id="title" />
        </label>
        <label htmlFor="title">
          Subtítulo
          <input id="title" />
        </label>
        <label htmlFor="title">
          Imagem
          <input id="title" />
        </label>
        <label htmlFor="title">
          Sinopse
          <input id="title" />
        </label>
        <label htmlFor="title">
          Avaliação
          <input id="title" />
        </label>
        <label htmlFor="title">
          Gênero
          <input id="title" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {

}.isRequired;

export default AddMovie;

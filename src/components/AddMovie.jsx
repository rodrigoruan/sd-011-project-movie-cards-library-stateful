import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
          />
        </label>

        <label htmlFor="imagePath">
          Imagem
          <input name="imagePath" />
        </label>

        <label htmlFor="storyline">
          Sinopse
          <input name="storyline" />
        </label>

        <label htmlFor="rating">
          Avaliação
          <input name="rating" />
        </label>

        <label htmlFor="genre">
          Gênero
          <input name="genre" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {

}.isRequired;

export default AddMovie;

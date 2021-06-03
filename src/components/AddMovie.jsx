import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonAddMovie from './ButtonAddMovie';
import Label from './Label';
import AddRatingNewFilm from './AddRatingNewFilm';
import AddGenreNewFilm from './AddGenreNewFilm';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovieList = this.addMovieList.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovieList(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, image, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Label
          textcall="Titulo"
          inputName="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Subtitulo"
          inputName="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Sinopse"
          inputName="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Imagem"
          inputName="image"
          value={ image }
          handleChange={ this.handleChange }
        />
        <AddRatingNewFilm rating={ rating } handleChange={ this.handleChange } />
        <AddGenreNewFilm genre={ genre } handleChange={ this.handleChange } />
        <ButtonAddMovie onClick={ () => this.addMovieList(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieImage from './AddMovieImage';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.createANewMovie = this.createANewMovie.bind(this);

    this.state = {
      button: '',
    };
  }

  createANewMovie(e) {
    e.preventDefault();
  }

  render() {
    const { button } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieStoryline />
        <AddMovieRating />
        <AddMovieGenre />
        <AddMovieImage />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.createANewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default AddMovie;

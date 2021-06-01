import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  addMovie(movie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
    }));
  }

  render() {
    const {
      movies,
      searchText,
      bookmarketOnly,
      selectedGenre,
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarketOnly={ bookmarketOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};
MovieLibrary.defaultProps = {
  movies: {},
};

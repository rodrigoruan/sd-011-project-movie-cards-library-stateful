import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    let filtredMovies = movies;
    if (searchText) {
      filtredMovies = filtredMovies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      filtredMovies = filtredMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtredMovies = filtredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        {
          filtredMovies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      bookmarkedMovies: movies.filter((el) => el.bookmarked === true),
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.CheckBookMark = this.CheckBookMark.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleMovieGenre = this.handleMovieGenre.bind(this);
  }

  handleTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  CheckBookMark = () =>
    this.setState((curr) => ({ bookmarkedOnly: !curr.bookmarkedOnly }));

  handleAddMovie = (el) => {
    el.rating = parseFloat(el.rating);
    this.setState((curr) => ({ movies: [...curr.movies, el] }));
  };

  handleMovieGenre = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  };

  filterMoviesBySearch = (movies, searchText) => {
    return movies.filter((el) => {
      const newTerm = el.title + el.subtitle + el.storyline;
      return newTerm.includes(searchText);
    });
  };

  filterMoviesByGenre = (movies, genre) => {
    return movies.filter((el) => el.genre.includes(genre));
  };

  filterMoviesByBookMarked = (movies, bookmarked) => {
    return bookmarked ? movies.filter((el) => el.bookmarked === bookmarked) : movies;
  };

  // prettier-ignore
  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let filteredMovies = this.filterMoviesByGenre(movies, selectedGenre);
    filteredMovies = this.filterMoviesBySearch(filteredMovies, searchText);
    filteredMovies = this.filterMoviesByBookMarked(filteredMovies, bookmarkedOnly)
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.CheckBookMark }
          onSearchTextChange={ this.handleTextChange }
          searchText={ searchText }
          onSelectedGenreChange={ this.handleMovieGenre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      filter: PropTypes.func,
      map: PropTypes.func,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

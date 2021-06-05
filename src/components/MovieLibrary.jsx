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
      movies,
    };

    this.searchChange = this.searchChange.bind(this);
    this.addMovieForm = this.addMovieForm.bind(this);
  }

  searchChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieForm(newMovie) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filterMovies = movies.filter((movie) => (
      movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
    ));

    if (bookmarkedOnly) {
      filterMovies = filterMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filterMovies = filterMovies.filter((movie) => (
        movie.genre.includes(selectedGenre.toLowerCase())));
    }

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchChange }
        />
        <MovieList movies={ filterMovies } />
        <AddMovie onClick={ this.addMovieForm } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      rating: PropTypes.number,
      storyline: PropTypes.string,
      genre: PropTypes.string,
    }).isRequired,
  ),
};

MovieLibrary.defaultProps = {
  movies: [],
};

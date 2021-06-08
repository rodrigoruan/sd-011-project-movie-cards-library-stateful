import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.addMovieOnClick = this.addMovieOnClick.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.filterMoviesList = this.filterMoviesList.bind(this);
    this.filterBookmarkedOnly = this.filterBookmarkedOnly.bind(this);
    this.filterSelectedGenre = this.filterSelectedGenre.bind(this);
  }

  handleSearchBarChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { movies } = this.props;
      if (name === 'searchText') {
        this.setState({
          movies: this.filterMoviesList(),
        });
      } else if (name === 'bookmarkedOnly') {
        this.setState({
          movies: this.filterBookmarkedOnly(),
        });
      } else if (name === 'selectedGenre') {
        this.setState({
          movies: this.filterSelectedGenre(),
        });
      } else {
        this.setState({
          movies: movies,
        });
      }
    });
  }

  filterMoviesList() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const searchMovies = movies.filter((movie) => ((movie.title.includes(searchText))
    || (movie.subtitle.includes(searchText))
    || (movie.storyline.includes(searchText))
    ));
    return searchMovies;
  }

  filterBookmarkedOnly() {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  filterSelectedGenre() {
    const { selectedGenre } = this.state;
    const { movies } = this.props;
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  addMovieOnClick(movie) {
    this.setState((currentState) => ({
      movies: [...currentState.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearchBarChange }
          onBookmarkedChange={ this.handleSearchBarChange }
          onSelectedGenreChange={ this.handleSearchBarChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieOnClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.PropTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

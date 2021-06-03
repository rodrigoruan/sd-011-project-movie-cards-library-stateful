import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  onBookmarkedChange=({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange=({ target: { value } }) => {
    this.setState({
      selectedGenre: value,
    });
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  filteredMovies=() => {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    let arrayMovies = movies;
    if (searchText !== '') {
      arrayMovies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      arrayMovies = movies.filter((movie) => movie.bookmarked === (bookmarkedOnly));
    }
    if (selectedGenre !== '') {
      arrayMovies = movies.filter((movie) => movie.genre === (selectedGenre));
    }
    return arrayMovies;
  }

  clicked(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const movies = this.filteredMovies();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.clicked } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

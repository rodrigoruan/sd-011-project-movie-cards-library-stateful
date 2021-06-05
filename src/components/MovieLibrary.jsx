import React, { Component } from 'react';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterByCheckBox = this.filterByCheckBox.bind(this);
    this.filterByFavorites = this.filterByFavorites.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  filterMoviesByText() {
    const { searchText, movies } = this.state;
    const arrayMovies = movies.filter((movie) => (
      movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
    ));
    return arrayMovies;
  }

  filterByFavorites() {
    const { bookmarkedOnly } = this.state;
    const moviesFavArray = (this.filterMoviesByText()).filter((movie) => (
      bookmarkedOnly ? movie.bookmarked === true : movie));
    return moviesFavArray;
  }

  filterByCheckBox() {
    const { selectedGenre } = this.state;
    const moviesGenreArray = (this.filterByFavorites()).filter((movie) => (
      movie.genre.includes(selectedGenre)
    ));
    return moviesGenreArray;
  }

  onClick(movieData) {
    const { movies } = this.state;
    console.log(movies);
    movies.push(movieData);
    console.log(movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterByCheckBox() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

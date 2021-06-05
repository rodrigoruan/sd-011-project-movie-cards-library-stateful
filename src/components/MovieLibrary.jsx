import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  onSearchChange() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesArray;
    if (bookmarkedOnly) {
      moviesArray = movies.filter((movie) => movie.bookmarked);
    } else if (selectedGenre) {
      moviesArray = movies.filter((movie) => movie.genre === selectedGenre);
    } else {
      moviesArray = movies.filter((movie) => (
        (movie.title.includes(searchText))
        || (movie.subtitle.includes(searchText))
        || (movie.storyline.includes(searchText))));
    }
    return moviesArray;
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
        <MovieList movies={ this.onSearchChange() } />
        {/* <AddMovie onClick="" /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;

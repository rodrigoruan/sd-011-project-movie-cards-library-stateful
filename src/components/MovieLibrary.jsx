import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function onClick() {
}

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    const { name } = event.target;
    const nome = event.target.type === 'checkbox' ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: nome,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterMovies = movies;
    if (searchText) {
      filterMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filterMovies = movies.filter((filme) => filme.bookmarked);
    }
    if (selectedGenre) {
      filterMovies = movies.filter((filme) => filme.genre.includes(selectedGenre));
    }
    return filterMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ this.filterMovies() }
        />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

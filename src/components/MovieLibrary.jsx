// implement AddMovie component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: '',
      // movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const array = movies;
    if (searchText) {
      array.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
      return array;
    }

    if (bookmarkedOnly) {
      array.filter((movie) => movie.bookmarked === true);
      return array;
    }

    if (selectedGenre) {
      array.filter((movie) => movie.genre === selectedGenre);
      return array;
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.aleatorio } />
      </div>
    );
  }
}

export default MovieLibrary;

// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const stateValue = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.state = stateValue;

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }

  handleInputChanges({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) this.setState({ bookmarkedOnly: false });
    if (bookmarkedOnly === false) this.setState({ bookmarkedOnly: true });
  }

  newMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          searchText={ searchText }
          onSearchTextChange={ this.handleInputChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInputChanges }
        />
        <MovieList
          movies={ movies }
          filters={ { searchText, bookmarkedOnly, selectedGenre } }
        />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

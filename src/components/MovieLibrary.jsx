// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.filterLibraryText = this.filterLibraryText.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChanges(event) {
    const tagElement = event.target.name;
    if (tagElement !== 'bookmarkedOnly') {
      this.setState({
        [tagElement]: event.target.value,
      });
    } else {
      this.setState({
        [tagElement]: event.target.checked,
      });
    }
  }

  addMovie(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filterLibraryGenre(array) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return array.filter(
        (movie) => selectedGenre === movie.genre,
      );
    }
    return array;
  }

  filterLibraryText() {
    const { movies, searchText } = this.state;
    return movies.filter((movie) => {
      const totalText = `${movie.title} ${movie.subtitle} ${movie.storyline}`;
      return totalText.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  filterLibraryBookmark(array) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return array.filter((movie) => movie.bookmarked === true);
    }
    return array;
  }

  filterGeneral() {
    return this.filterLibraryBookmark(this.filterLibraryGenre(this.filterLibraryText()));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filterGeneral();
    return (
      <fragment>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChanges }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChanges }
        />
        <MovieList
          movies={ filteredMovies }
        />
        <AddMovie onClick={ this.addMovie } />
      </fragment>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;

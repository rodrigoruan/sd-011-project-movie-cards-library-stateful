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

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { type } = target;

    switch (type) {
    case 'text':
      this.setState({
        searchText: target.value,
      });
      break;

    case 'checkbox':
      this.setState({
        bookmarkedOnly: target.checked,
      });
      break;

    default:
      this.setState({
        selectedGenre: target.value,
      });
      break;
    }
  }

  filterMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;

    let Movies = movies;

    if (bookmarkedOnly === true) {
      Movies = Movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      Movies = Movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      Movies = Movies.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }

    return Movies;
  }

  addMovie(newMovie) {
    this.setState((beforeState) => ({
      movies: [...beforeState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />

        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;

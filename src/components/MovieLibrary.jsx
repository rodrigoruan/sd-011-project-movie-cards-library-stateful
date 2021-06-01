// implement AddMovie component here
import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.createMovieList = this.createMovieList.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  componentDidMount() {
    this.createMovieList();
  }

  handleAddMovies(newMovie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
    const { searchText, movies } = this.state;
    return (movies.filter((movie) => (
      searchText === movie.title
      || searchText === movie.subtitle
      || searchText === movie.storyline
    )));
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  createMovieList() {
    const { movies } = this.props;
    this.setState({
      movies,
    });
  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieLibrary.defaultProps = {
  movies: '',
};

export default MovieLibrary;

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
    // this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { type } = target;

    if (type === 'text') {
      this.setState({
        searchText: target.value,
      });
    } else if (type === 'checkbox') {
      this.setState({
        bookmarkedOnly: target.checked,
      });
    } else {
      this.setState({
        selectedGenre: target.value,
      });
    }
  }

  arrayMoviesFilter() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    let arrayMovies = movies;

    if (bookmarkedOnly) {
      arrayMovies = arrayMovies.filter((movie) => movie.bookmarked);
    } else if (selectedGenre) {
      arrayMovies = arrayMovies.filter((movie) => movie.genre === selectedGenre);
    } else if (searchText) {
      arrayMovies = arrayMovies.filter((movie) => movie.title
        .includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }

    return arrayMovies;
  }

  newMovie(item) {
    this.setState((beforeState) => ({
      movies: [...beforeState.movies, item],
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

        <MovieList movies={ this.arrayMoviesFilter() } />
        <AddMovie onClick={ (item) => this.newMovie(item) } />
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

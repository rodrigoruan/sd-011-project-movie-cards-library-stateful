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

    this.searchText = this.searchText.bind(this);

    this.filteredMovies = this.filteredMovies.bind(this);

    this.pushNewMovie = this.pushNewMovie.bind(this);
  }

  searchText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    });
  }

  filteredMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies = movies;
    if (searchText !== '') {
      arrayMovies = movies.filter((movie) => (
        (movie.title.toLowerCase().includes(searchText))
        || (movie.subtitle.toLowerCase().includes(searchText))
        || (movie.storyline.toLowerCase().includes(searchText))
      ));
    }
    if (bookmarkedOnly === true) {
      arrayMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      arrayMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return arrayMovies;
  }

  pushNewMovie = (newMovie) => {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchText }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchText }
        />

        <MovieList movies={ this.filteredMovies() } />

        <AddMovie onClick={ this.pushNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf((PropTypes.object).isRequired),
};

MovieLibrary.defaultProps = {
  movies: {},
};

export default MovieLibrary;

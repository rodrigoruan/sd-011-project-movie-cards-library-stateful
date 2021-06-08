import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.searchChange = this.searchChange.bind(this);
    this.filter = this.filter.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  searchChange({ target }) {
    const { type, value } = target;

    if (type === 'text') {
      this.setState({ searchText: value });
    } else if (type === 'checkbox') {
      this.setState({ bookmarkedOnly: target.checked });
    } else {
      this.setState({ selectedGenre: value });
    }
  }

  filter() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;

    let filterMovies = movies;

    if (searchText !== '') {
      filterMovies = filterMovies.filter((movie) => movie.title.includes(searchText));
    }

    if (bookmarkedOnly === true) {
      filterMovies = filterMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filterMovies = filterMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filterMovies;
  }

  addMovies(newMovie) {
    this.setState((before) => ({
      movies: [...before.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchChange }
        />
        <AddMovie onClick={ (newMovie) => this.addMovies(newMovie) } />
        <MovieList movies={ this.filter() } />
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

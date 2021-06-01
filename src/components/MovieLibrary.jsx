import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.movieFilter(name));
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  movieFilter(typeFilter) {
    if (this.state.bookmarkedOnly === true) {
      const bkmrkedMovies = this.state.movies.filter((filme) => filme.bookmarked === true);
      return this.setState({
        movies: bkmrkedMovies,
      });
    }

    if (typeFilter === 'selectedGenre') {
      const genreMovies = this.props.movies.filter((filme) => filme.genre === this.state.selectedGenre);

      return this.setState({
        movies: genreMovies,
      });
    }

    if (this.state.searchText !== '') {
      const searchedMovie = this.state.movies.filter((filme) => filme.title.includes(this.state.searchText)
      || filme.subtitle.includes(this.state.searchText)
      || filme.storyline.includes(this.state.searchText));

      return this.setState({
        movies: searchedMovie,
      });
    }
    return this.setState({
      movies: this.props.movies
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange={ this.handleChangeLibrary }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeLibrary }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.handleChangeLibrary }
        />
        <MovieList movies={ this.state.movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

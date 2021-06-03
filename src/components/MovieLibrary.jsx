import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.inputSearch = this.inputSearch.bind(this);
    this.renderMovie = this.renderMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  inputSearch(event) {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  query() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let movie = movies;
    if (bookmarkedOnly) {
      movie = movies.filter(({ bookmarked }) => (
        bookmarked === true
      ));
    }

    if (selectedGenre) {
      movie = movies.filter(({ genre }) => (
        genre.includes(selectedGenre)
      ));
    }

    if (searchText) {
      movie = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText) || subtitle.includes(searchText)
        || storyline.includes(searchText)));
    }

    return movie;
  }

  renderMovie(newMovie) {
    this.setState((presentsMovies) => ({
      movies: [...presentsMovies.movies, newMovie],
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
          onBookmarkedChange={ this.inputSearch }
          onSearchTextChange={ this.inputSearch }
          onSelectedGenreChange={ this.inputSearch }
        />
        <MovieList movies={ this.query() } />
        <AddMovie onClick={ this.renderMovie } />
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

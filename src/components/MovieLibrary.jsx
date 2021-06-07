import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleToggleBoomarked = this.handleToggleBoomarked.bind(this);
  }

  handleAddMovie(newMovieData) {
    this.setState((previous) => {
      const newArray = [...previous.movies];
      newMovieData.rating = parseFloat(newMovieData.rating);
      newArray.push({ ...newMovieData, boomarked: false });
      return { movies: newArray };
    });
  }

  handleChangeGenre(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  handleChangeText(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleToggleBoomarked(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  filterMovies(movies, filters) {
    const filterFunctionLibrary = {
      searchTerm: (({ title, subtitle, storyline }, term) => {
        const allText = title + subtitle + storyline;
        return allText.toLowerCase().includes(term.toLowerCase());
      }),
      genre: ((movie, genre) => movie.genre === genre),
      bookmarked: ((movie, bookmarked) => movie.bookmarked === bookmarked),
    };

    if (!filters) return movies;

    const filterObjects = [];

    Object.entries(filters).forEach((filter) => {
      if (filter[1]) {
        filterObjects.push({
          name: filter[0],
          filterFunction: filterFunctionLibrary[filter[0]],
        });
      }
    });

    if (!filterObjects.length) return movies;

    return movies.filter((movie) => (
      filterObjects.reduce((passAll, { name, filterFunction }) => (
        passAll && filterFunction(movie, filters[name])), true)));
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    const filters = {
      bookmarked: bookmarkedOnly,
      searchTerm: searchText,
      genre: selectedGenre,
    };

    const filteredMovies = this.filterMovies(movies, filters);

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleToggleBoomarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeGenre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import Movielist from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter(({ title,
        subtitle,
        storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <Movielist movies={ this.filter() } />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.string.isRequired,
// };

export default MovieLibrary;

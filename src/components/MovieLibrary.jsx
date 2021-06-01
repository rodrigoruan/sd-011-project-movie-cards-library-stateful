import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeTextState = ({ target }) => {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  changeBookMarkedState = () => {
    this.setState((previusState) => ({
      bookmarkedOnly: !previusState.bookmarkedOnly,
    }));
  }

  changeGenreState = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  // filterMovies = () => {
  //   const { movies } = this.props;
  //   const { searchText, bookmarkedOnly, selectedGenre } = this.state;
  //   let filteredMovies = movies;

  //   if (bookmarkedOnly) {
  //     filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
  //   }
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeTextState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeBookMarkedState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeGenreState }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

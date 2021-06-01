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

  // changeSelectedGenre = () => {
  //   const { selectedGenre } = this.state;
  //   const { movies } = this.props;
  //   const filtered = movies.filter((movie) => movie.genre.includes(selectedGenre));
  //   this.setState({
  //     movies: filtered,
  //   });
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
  movieCard: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviesArray: movies,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.filterLibrary = this.filterLibrary.bind(this);
  }

  handleChanges(event) {
    const tagElement = event.target.name;
    this.setState({
      [tagElement]: event.target.value,
    });
  }

  filterLibrary() {
    const { moviesArray, selectedGenre } = this.state;
    const filteredMovies = moviesArray.filter(
      (movie) => selectedGenre === movie.genre,
    );
    this.setState({
      moviesArray: filteredMovies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, moviesArray } = this.state;
    return (
      <fragment>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChanges }
          bookmarkedOnly={ bookmarkedOnly }
          onBookMarkedChange={ this.handleChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChanges }
          filterLibrary={ this.filterLibrary }
        />
        <MovieList movies={ moviesArray } />
      </fragment>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;

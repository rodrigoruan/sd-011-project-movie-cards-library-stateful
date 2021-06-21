import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

function onClick() {
}

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  updateSearchText(event) {
    const { name } = event.target;
    const newValue = event.target.type === 'checkbox' ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: newValue,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies = movies;
    if (searchText) {
      arrayMovies = movies.filter((movie) => (
        movie.title.includes(searcText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
      if (bookmarkedOnly) {
        arrayMovies = movies.filter((movieOne) => movieOne.bookmarked);
      }
      if (selectedGenre) {
        arrayMovies = movies.filter((movieTwo) => movieTwo.genre.includes(selectedGenre));
      }
      return arrayMovies;
    }
  }

  render() {
    AddMovie.defaultProps = {
      onClick: PropTypes.func,
    };
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearchText }
          bookmarked={ bookmarkedOnly }
          onBookmarkedChange={ this.updateSearchText }
          selectGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateSearchText }
        />
        <MovieList
          movies={ this.filterMovies() }

        />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

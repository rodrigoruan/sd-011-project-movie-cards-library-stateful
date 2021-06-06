import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.filteredContent = this.filteredContent.bind(this);
    this.showTime = this.showTime.bind(this);
  }

  onHandleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.filteredContent());
  }

  filteredContent() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    const filterMovie = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly === true) {
      const favoriteArray = filterMovie.filter((movie) => movie.bookmarked === true);
      return this.setState({
        movies: favoriteArray.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
    return this.setState({
      movies: filterMovie.filter((movie) => movie.genre.includes(selectedGenre)),
    });
  }

  showTime(addMov) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addMov],
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onHandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onHandleChange }
          selectedGenre={ this.selectedGenre }
          onSelectedGenreChange={ this.onHandleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.showTime } />
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

// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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

  handleInfo = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  filter() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    let moviesToRender = movies;
    if (bookmarkedOnly) {
      moviesToRender = moviesToRender.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre) {
      moviesToRender = moviesToRender.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      moviesToRender = moviesToRender
        .filter(({ title, subtitle, storyline }) => (title).includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
    }
    return moviesToRender;
  }

  renderCard = (card) => {
    this.setState((previus) => ({
      movies: [...previus.movies, card],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInfo }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInfo }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInfo }
        />
        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ this.renderCard } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

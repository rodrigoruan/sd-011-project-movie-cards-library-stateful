// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter(({ title, subtitle, storyline }) => title
        .toLowerCase().includes(value.toLowerCase())
      || subtitle.toLowerCase().includes(value.toLowerCase())
      || storyline.toLowerCase().includes(value.toLowerCase())),
    }));
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    const { movies } = this.props;
    if (checked) {
      this.setState(() => ({
        [name]: checked,
        movies: movies.filter((movie) => movie.bookmarked),
      }));
    } else {
      this.setState(() => ({
        [name]: checked,
        movies,
      }));
    }
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: movies.filter((movie) => movie.genre === value),
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies,
      }));
    }
  }

  onClick(myState) {
    const { title, subtitle, storyline, imagePath, rating, genre } = myState;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    };
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

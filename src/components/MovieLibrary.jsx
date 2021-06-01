import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(changeMovie) {
    const { movies } = this.props;
    this.setState({ movies: [...movies, changeMovie] });
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    this.setState({
      searchText: event.target.value,
    });
    const { searchText } = this.state;

    movies.filter((movie) => movie.title.includes(searchText))
      .map((movie) => this.setState({ movies: [movie] }));
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    this.setState({ selectedGenre: event.target.value });
    const { selectedGenre } = this.state;
    movies.filter((movie) => movie.genre.includes(selectedGenre))
      .map((movie) => this.setState({ movies: [movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre,
      movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }

        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (changeMovie) => this.onClick(changeMovie) } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

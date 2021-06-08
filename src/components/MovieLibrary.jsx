import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,

    };
    this.handlerChange = this.handlerChange.bind(this.props);
    this.filterMovies = this.filterMovies.bind(this.props);
  }

  handlerChange({ event }) {
    const { name } = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies(event) {
    const { name, value } = event.target;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movie = movies;
    if (searchText) {
      movie = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
      if (bookmarkedOnly) {
        movie = movies.filter(({ book }) => book === true);
      }
      if (selectedGenre) {
        movie = movies.filter(({ genre }) => genre.includes(selectedGenre));
      }
    }
    this.state({
      [name]: value,
      movies: movie,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movie } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.inputSearch }
          onSearchTextChange={ this.inputSearch }
          onSelectedGenreChange={ this.inputSearch }
        />
        <MovieList movies={ movie } />
        <AddMovie  />
      </section>
    );
  }
}

MovieLibrary.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

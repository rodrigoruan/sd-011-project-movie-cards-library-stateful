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
    this.generateCard = this.generateCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.filterFunc());
  }

  filterFunc() {
    const { movies } = this.props;
    let result = movies;
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly !== false) {
      result = result.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      result = result.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    }
    this.setState({
      movies: result,
    });
  }

  generateCard(object) {
    const { movies } = this.state;
    const newArray = movies.concat(object);
    this.setState({
      movies: newArray,
    });
  }

  render() {
    const { movies } = this.state;
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.generateCard } />
      </div>
    );
  }
}
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;

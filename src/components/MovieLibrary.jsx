import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: '',
};

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.generateCard = this.generateCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.name, target.value)

    this.setState({
      [name]: value,
      movies: this.filterFunc(),
    });
  }

  filterFunc() {
    const { movies } = this.props;
    let result = movies;
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly) {
      result = result.filter((movie) => movie.bookMarked === true);
    }
    if (selectedGenre !== '') {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      result = result.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    }
    return result;
  }

  generateCard() {
  //  const { movies } = this.props;
    return null;
  }

  render() {
    const { movies } = this.props;
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

export default MovieLibrary;

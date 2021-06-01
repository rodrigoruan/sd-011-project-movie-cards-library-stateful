// implement AddMovie component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import PropTypes from 'prop-types';
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

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookMarkedOnly = this.handleBookMarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
  }

  handleSearchText({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  handleBookMarkedOnly({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handleSelectedGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
       <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleSearchText }
        bookmarkedOnly= { bookmarkedOnly }
        onBookmarkedChange={ this.handleBookMarkedOnly }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />    
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

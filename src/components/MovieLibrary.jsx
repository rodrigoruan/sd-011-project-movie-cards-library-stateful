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

    this.onClick = this.onClick.bind(this);
    this.bookmarkHandler = this.bookmarkHandler.bind(this);
    this.genericHandler = this.genericHandler.bind(this);
  }

  onClick(state) {
    console.log(state);
  }

  bookmarkHandler(event) {
    const { target: { checked } } = event;
    this.setState({ bookmarkedOnly: checked });
  }

  genericHandler(event) {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.bookmarkHandler }
          onSelectedGenreChange={ this.genericHandler }
          onSearchTextChange={ this.genericHandler }
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

export default MovieLibrary;

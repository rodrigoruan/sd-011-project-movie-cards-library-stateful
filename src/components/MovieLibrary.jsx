import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleSearchText({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  handleBookmarkedOnly({ target }) {
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
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

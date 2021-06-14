import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeTracker = this.changeTracker.bind(this);
  }

  changeTracker({ target }) {
    const { type, value } = target;

    if (type === 'text') {
      this.setState({ searchText: value });
    } else if (type === 'checkbox') {
      this.setState({ bookmarkedOnly: target.checked });
    } else {
      this.setState({ selectedGenre: value });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeTracker }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeTracker }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeTracker }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

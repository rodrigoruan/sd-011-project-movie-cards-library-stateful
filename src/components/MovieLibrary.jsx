import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
    this.onSearchTextChangeFun = this.onSearchTextChangeFun.bind(this);
    this.onBookmarkedChangeFun = this.onBookmarkedChangeFun.bind(this);
    this.onSelectedGenreChangeFun = this.onSelectedGenreChangeFun.bind(this);
  }

  onSearchTextChangeFun(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChangeFun(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChangeFun(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChangeFun }
          onBookmarkedChange={ this.onBookmarkedChangeFun }
          onSelectedGenreChange={ this.onSelectedGenreChangeFun }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: (PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

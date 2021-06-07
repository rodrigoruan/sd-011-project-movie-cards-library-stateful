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
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleSearchText({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    }, () => {
      thi.filterMovies();
    });
  }

  handleBookmarkedOnly({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    }, () => {
      this.filterMovies();
    });
  }

  handleSelectedGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    }, () => {
      this.filterMovies();
    });
  }

  react() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
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

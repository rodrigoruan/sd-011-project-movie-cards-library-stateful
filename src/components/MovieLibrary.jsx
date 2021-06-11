import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.filterSearchText = this.filterSearchText.bind(this);
    this.filterBookmark = this.filterBookmark.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
  }

  filterSearchText({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const filteredMovies = movies
      .filter(({
        title,
        subtitle,
        storyline,
      }) => title.includes(value)
        || subtitle.includes(value)
        || storyline.includes(value));

    this.setState({ searchText: value, movies: filteredMovies });
  }

  filterBookmark({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    const filteredMovies = checked
      ? movies.filter(({ bookmarked }) => bookmarked)
      : movies;

    this.setState({ bookmarkedOnly: checked, movies: filteredMovies });
  }

  filterGenre({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const filteredMovies = value
      ? movies.filter(({ genre }) => genre === value)
      : movies;

    this.setState({ selectedGenre: value, movies: filteredMovies });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies: currentMovies,
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.filterBookmark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filterGenre }
        />
        <AddMovie />
        <MovieList movies={ currentMovies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

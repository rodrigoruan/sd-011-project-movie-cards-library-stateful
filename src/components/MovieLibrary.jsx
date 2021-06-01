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
      // selectedGenre: '',
      movies: movies.map((el) => el),
      bookmarkedMovies: movies.filter((el) => el.bookmarked === true),
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.CheckBookMark = this.CheckBookMark.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleMovieGenre = this.handleMovieGenre.bind(this);
  }

  handleTextChange = ({ target }) => {
    const { movies } = this.props;
    const filtered = movies.filter(
      (el) => el.title.includes(target.value)
        || el.subtitle.includes(target.value)
        || el.storyline.includes(target.value),
    );
    this.setState({ searchText: target.value }, () => {
      const { searchText } = this.state;
      return searchText === target.value
        ? this.setState({ movies: filtered })
        : this.setState({ movies });
    });
  };

  CheckBookMark = () => {
    const { movies } = this.props;
    this.setState(
      (curr) => ({ bookmarkedOnly: !curr.bookmarkedOnly }),
      () => {
        const { bookmarkedOnly, bookmarkedMovies } = this.state;
        return bookmarkedOnly
          ? this.setState({ movies: bookmarkedMovies })
          : this.setState({ movies });
      },
    );
  };

  handleAddMovie = (el) => {
    el.rating = parseFloat(el.rating);
    this.setState((curr) => ({ movies: [...curr.movies, el] }));
  };

  handleMovieGenre = ({ target }) => {
    const { movies } = this.props;
    // this.setState({ selectedGenre: target.value });
    this.setState({ movies: movies.filter((el) => el.genre.includes(target.value)) });
  };

  // prettier-ignore
  render() {
    const { bookmarkedOnly, searchText, movies } = this.state;
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.CheckBookMark }
          onSearchTextChange={ this.handleTextChange }
          searchText={ searchText }
          onSelectedGenreChange={ this.handleMovieGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

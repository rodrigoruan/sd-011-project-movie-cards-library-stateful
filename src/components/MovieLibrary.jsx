import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { value } = this.props;
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)),
    });
    console.log(target);
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const { name } = target;
    this.setState(() => ({
      [name]: bookmarkedOnly === false,
      movies: movies.filter((movie) => (!bookmarkedOnly
        ? movie.bookmarked === !bookmarkedOnly
        : true)),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    console.log(value);
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => movie.genre.includes(value)),
    }));
  }

  onClick(object) {
    this.setState((altera) => ({
      movies: [...altera.movies, object],
    }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  value: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MovieLibrary;

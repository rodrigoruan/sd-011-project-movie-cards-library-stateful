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

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    });
  }

  onClick(state) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, state],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={
            movies.filter((movie) => (
              (
                movie.title.toLowerCase().includes(searchText)
                || movie.subtitle.toLowerCase().includes(searchText)
                || movie.storyline.toLowerCase().includes(searchText)
              ) && (
                bookmarkedOnly === false ? true : movie.bookmarked === true
              ) && (
                movie.genre.includes(selectedGenre)
              )))
          }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

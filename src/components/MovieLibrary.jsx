import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.filterMovies = this.filterMovies.bind(this);
    this.searchInfo = this.searchInfo.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    return movies;
  }

  searchInfo({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'bookmarkedOnly') {
      value = (target.checked === true);
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchInfo }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchInfo }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchInfo }
        />
        <MovieList movies={ this.filterMovies() } />
      </div>
    );
  }
}

export default MovieLibrary;

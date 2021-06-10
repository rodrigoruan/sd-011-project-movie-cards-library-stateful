import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
    constructor(props) {
      super(props)
      const {movies} = this.props;
      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: movies,
      }
      this.onClick = this.onClick.bind(this);
      this.filterMovie = this.filterMovie.bind(this);
      this.onSearchTextChange = this.onSearchTextChange.bind(this);
      this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
      this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    };

    onClick(e) {
      this.setState((previousState) => ({
        movies: [...previousState.movies, e]
      }));
    }

    onSearchTextChange( {target: {value}} ) {
      this.setState({
        searchText: value,
      }, () => this.setState({
        movies: this.filterMovie()
      }));
    }

    onBookmarkedChange( {target: { type, value, checked }} ) {
      value = type === 'checkbox' ? checked : value;
      this.setState({
        bookmarkedOnly: value,
        }, () => this.setState({
          movies: this.filterMovie()
        }));
      }
    onSelectedGenreChange( {target: {value}} ) {
      this.setState({
        selectedGenre: value
      }, () => this.setState({
        movies: this.filterMovie()
      }));
    }

    filterMovie() {
      const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
      if (this.state.searchText) { 
        return movies.filter((movie) => movie.title.includes(searchText) || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
      }
      if (bookmarkedOnly === true) {
        return movies.filter((movie) => movie.bookmarked=== true);
      }
      if (selectedGenre) {
        return movies.filter((movie) => movie.genre === selectedGenre);
      }
      return movies;
    }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
      <SearchBar
      searchText={searchText}
      bookmarkedOnly={bookmarkedOnly}
      selectedGenre={selectedGenre}
      onSearchTextChange={this.onSearchTextChange}
      onBookmarkedChange={this.onBookmarkedChange}
      onSelectedGenreChange={this.onSelectedGenreChange}
      />
      <AddMovie onClick={this.onClick}/>
      <MovieList movies={movies} />
      </>
    );
  }
}

export default MovieLibrary;

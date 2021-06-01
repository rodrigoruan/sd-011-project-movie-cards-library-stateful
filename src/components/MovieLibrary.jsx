// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const searchString = target.value;
    let updatedMovies = movies;
    
    this.setState({searchText: searchString});
   
    updatedMovies = this.state.movies.filter((movie) => {
      if(movie.storyline.toLowerCase().includes(searchString.toLowerCase()) ||
        movie.title.toLowerCase().includes(searchString.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(searchString.toLowerCase())) {
          return movie;
        }
    });
    this.setState({movies: updatedMovies});
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
    let updatedMovies = movies;

    if(!this.state.bookmarkedOnly) {
      updatedMovies = this.state.movies.filter((movie) => {
        if(movie.bookmarked) {
          return movie;
        }
      });
    }
    this.setState({movies: updatedMovies});
  }

  onSelectedGenreChange({ target }) {
    let updatedMovies = movies;
    this.setState({ selectedGenre: target.value });
   
    if(target.value !== '') {
      updatedMovies = this.state.movies.filter((movie) => {
        if(movie.genre === target.value) {
          return movie;
        }
      });
    }
    this.setState({movies: updatedMovies});
  }

  render() {

    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
         <MovieList movies={movies} />
      </div>
    );
  }
}

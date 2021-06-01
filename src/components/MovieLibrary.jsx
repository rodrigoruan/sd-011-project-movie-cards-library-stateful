import React, { Component } from 'react';

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
      movies: movies,
      data: movies,
    }
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByText = this.filterByText.bind(this);
    // this.filter = this.filter.bind(this)
  }
  
  filterByBookmark() {
    const { bookmarkedOnly, data, movies } = this.state;
    let filtredMovies = [];
    if (bookmarkedOnly === true) {
      filtredMovies = (movies.filter((movie) => movie.bookmarked === true));
      this.setState({
        movies: filtredMovies,
      })
    } else {
      this.setState({
        movies: movies,
      })
    }
  }

  filterByGenre() {
    const { selectedGenre, data, movies, searchText } = this.state;
    let filtredMovies = [];
    if (selectedGenre && searchText) {
      filtredMovies = (movies.filter((movie) => movie.genre === selectedGenre));
      this.setState({
        movies: filtredMovies,
      })
    } else if (selectedGenre && !searchText) {
      filtredMovies = (data.filter((movie) => movie.genre === selectedGenre));
      this.setState({
        movies: filtredMovies,
      })
    } else {
      this.setState({
        movies: data,
      })
    }
  }

  filterByText() {
    const { searchText, data, movies } = this.state;
    let filtredMovies = [];
    if (searchText) {
      filtredMovies = (data.filter((movie) => ((movie.title).toLowerCase().includes(searchText.toLowerCase()) || (movie.subtitle).toLowerCase().includes(searchText.toLowerCase()) || (movie.storyline).toLowerCase().includes(searchText.toLowerCase()))))
      this.setState({
        movies: filtredMovies,
      })
    } else {
      this.setState({
        movies: movies,
      })
    }
  }

  // filter() {
  //   this.filterByText();
  //   this.filterByBookmark();
    
  // }

  async onSearchTextChange({ target }) {
    const { value } = target;
    await this.setState({
      searchText: value,
    })
    this.filterByText();
  }
  
  async onBookmarkedChange({ target }) {
    const { checked } = target;
    await this.setState({
      bookmarkedOnly: checked,
    })
    this.filterByBookmark()
  }

  async onSelectedGenreChange({ target }) {
    const { value } = target;
    await this.setState({
      selectedGenre: value,
    })
    this.filterByGenre();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        searchText={ searchText } 
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.onSearchTextChange }
        onBookmarkedChange={ this.onBookmarkedChange }
        onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
        movies={ movies } 
        />
        <AddMovie onClick={ this.filterMovieList }/>
      </div>
    );
  }
}

export default MovieLibrary;

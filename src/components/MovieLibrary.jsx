import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
  super(props);
  
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
    
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({searchText: target.value})
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({bookmarkedOnly: value})
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value })
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        {/* <MovieList movies={this.props.movies} /> */}
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;

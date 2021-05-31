import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    }
    this.changeStateLibrary = this.changeStateLibrary.bind(this)
  }
  
  changeStateLibrary({target}) {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked: value,
    })
  }

  render() {
    const {movies} = this.props; 
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly} selectedGenre={this.state.selectedGenre}
        onSearchTextChange={this.changeStateLibrary} onBookmarkedChange={this.changeStateLibrary} onSelectedGenreChange={this.changeStateLibrary}/>
        <AddMovie />
        {/* <MovieList movies={this.props.movies} /> */}
      </div>
    );
  }
}

export default MovieLibrary;

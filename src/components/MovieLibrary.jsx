// implement AddMovie component here.
import React, { Component } from 'react';
// import data from '../data';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
    };
  }

  render() {
    // const { [ movies ] } = this.props;
    // const { searchText, onSearchTextChange, bookmarkedOnly,
    //   onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.state;
    return (
      <div>
        <SearchBar />
        {/* <MovieLibrary movies={ data } /> */}
      </div>
    );
  }
}

export default MovieLibrary;

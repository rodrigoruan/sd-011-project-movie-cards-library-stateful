import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: 'action',
  movies: '',
};

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // handleChanges2({ target }) {    
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // onClick({ target }, event) {
  //   event.preventDefault()
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   })
  //   this.setState(initialState);
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ this.handleChanges2 }
          bookmarkedOnly={ false }
          onBookmarkedChange={ this.handleChanges2 }
          selectedGenre="string"
          onSelectedGenreChange={ this.handleChanges2 }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

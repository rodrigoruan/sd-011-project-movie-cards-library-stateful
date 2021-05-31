import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: data,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.CheckBookMark = this.CheckBookMark.bind(this);
  }

  handleTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
    this.setState({ movies: data.filter((el) => el.title.includes(this.state.searchText)) });
  };

  CheckBookMark = () => {
    this.setState((curr) => ({ bookmarkedOnly: !curr.bookmarkedOnly }));
    this.setState({
      movies: data.filter((el) => el.bookmarked === this.state.bookmarkedOnly),
    });
  };

  render() {
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.CheckBookMark}
          onSearchTextChange={this.handleTextChange}
          searchText={this.state.searchText}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

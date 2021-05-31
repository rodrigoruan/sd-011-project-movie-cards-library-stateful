import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.searchInfo = this.searchInfo.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
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
      </div>
    );
  }
}

export default MovieLibrary;

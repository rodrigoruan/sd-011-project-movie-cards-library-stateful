// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeCall = this.changeCall.bind(this);
  }

  changeCall({ target }) {
    const { name, value } = target
    if(name === 'bookmarkedOnly') {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={ this.state.searchText } 
          onSearchTextChange={ this.changeCall }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.changeCall }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.changeCall }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;

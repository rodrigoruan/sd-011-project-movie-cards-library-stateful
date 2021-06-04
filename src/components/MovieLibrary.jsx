// https://github.com/tryber/sd-011-project-movie-cards-library-stateful codigo base retirado daqui.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { target } = event;
    const { name } = target;
    const value = '';
    if (name === 'genre') {
      this.setState({
        [name]: 'action',
      });
    } else if (name === 'rating') {
      this.setState({
        [name]: 0,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }

    console.log('123', event);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;

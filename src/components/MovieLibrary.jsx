import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.hadleState = this.hadleState.bind(this);
    // this.addMovie = this.addMovie.bind(this);
  }

  hadleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }));
  }

  // addMovie(newMovie) {
  //   this.setState(() => ({ movies: movies.push(newMovie) }));
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div className="MovieLibrary">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.hadleState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.hadleState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.hadleState }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

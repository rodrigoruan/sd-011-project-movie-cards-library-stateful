import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(myState) {
    const { title, subtitle, storyline, imagePath, rating, genre } = myState;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    };
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeHandle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeHandle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeHandle }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>

    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

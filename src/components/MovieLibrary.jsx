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
    this.filteredList = this.filteredList.bind(this);
  }

  hadleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }));
  }

  filteredList() {
    const { searchText, movies } = this.state;
    return movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
  }

  // Em movieListe a prop movie deve passar nao a lista movie e sim a filtragem da emsma.
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
        <MovieList movies={ this.filteredList() } />
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

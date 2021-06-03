import React from 'react';
import PropTypes from 'prop-types';

// external files imports
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // super
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterLibrary = this.filterLibrary.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // functions
  handleChange({ target }) {
    const { name, type } = target;

    let value;
    if (type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }

    this.setState(() => ({ [name]: value }));
  }

  filterLibrary() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((items) => items.bookmarked);
    }

    if (selectedGenre.length !== 0) {
      return movies.filter((items) => items.genre === selectedGenre);
    }

    if (searchText.length !== 0) {
      return movies.filter((items) => {
        const { title, subtitle, storyline } = items;
        const auxTitle = title.includes(searchText);
        const auxSubtitle = subtitle.includes(searchText);
        const auxStoryline = storyline.includes(searchText);

        return (auxTitle || auxSubtitle || auxStoryline);
      });
    }

    return movies;
  }

  addMovie({ subtitle, title, imagePath, storyLine, rating, genre }) {
    const movieAdd = {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    };

    this.setState((items) => ({ movies: [...items.movies, movieAdd] }));
  }

  // render
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterLibrary() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

// propTypes
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

// export
export default MovieLibrary;

import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
        this.onSearchTextChange = this.onSearchTextChange.bind(this)
        this.onBookmarkedChange = this.onBookmarkedChange.bind(this)
        this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this)
        this.filtersMovies = this.filtersMovies.bind(this)
    }

    onSearchTextChange({target}) {
        this.setState({
            searchText: target.value
        });
    }

    onBookmarkedChange() {
        const { bookmarkedOnly } = this.state;
        if (bookmarkedOnly === false) {
            this.setState({
                bookmarkedOnly: true,
            });
        } else {
            this.setState({
                bookmarkedOnly: false,
            });
        }
    }

    onSelectedGenreChange({target}) {
        this.setState({
            selectedGenre: target.value,
        });
    }
/* Sávio Function */
    filtersMovies() {
        const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
        let result = movies.filter(({ title, subtitle, storyline }) => (
          title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        ));
        if (bookmarkedOnly) {
          result = result.filter(({ bookmarked }) => bookmarked);
        }
        if (selectedGenre !== '') {
          result = result.filter(({ genre }) => genre === selectedGenre);
        }
        return result;
      }

    render() {
        const { onSearchTextChange, 
            onBookmarkedChange, 
            onSelectedGenreChange, 
            filtersMovies } = this;
        const { searchText, bookmarkedOnly, selectedGenre } = this.state;
        return (
            <div>
                <SearchBar
                    searchText={searchText}
                    onSearchTextChange={onSearchTextChange}
                    onBookmarkedOnly={onBookmarkedChange}
                    bookmarkedOnly={bookmarkedOnly}
                    onSelectedGenreChange={onSelectedGenreChange}
                    selectedGenre={selectedGenre}
                />
                <MovieList movies={ filtersMovies() } />
                <AddMovie onClick={ () => {} } />
            </div>
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
  };
MovieLibrary.defaultProps = {
    movies: '',
};
  
export default MovieLibrary;
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: '',
  //     // teste2: '',
  //   };
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     searchText: event.target.value,
  //     // teste2: event.target.value,
  //   });
  // }

  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange } = this.props;
    // const { movie: {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,

    // },
    // } = this.state;

    return (
      <div>

        <form data-testid="search-bar-form">
          <label htmlFor="onSearchTextChange" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              name="onSearchTextChange"
              id="onSearchTextChange"
            />
          </label>

          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              name="bookmarkedOnly"
              id="bookmarkedOnly"
            />
          </label>
        </form>

      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: '',
  onBookmarkedChange: '',
  // selectedGenre: '',
  // onSelectedGenreChange: '',
};

export default SearchBar;

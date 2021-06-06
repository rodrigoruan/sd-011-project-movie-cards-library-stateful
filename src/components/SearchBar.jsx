// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      teste2: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
      teste2: event.target.value,
    });
  }

  render() {
    const { searchText, onSearchTextChange, teste2 } = this.state;
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
              value={ teste2 }
              onChange={ this.handleChange }
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
  teste: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,

  }),
};

SearchBar.defaultProps = {
  teste: {
    searchText: '',
    onSearchTextChange: '',
    bookmarkedOnly: '',
    onBookmarkedChange: '',
    selectedGenre: '',
    onSelectedGenreChange: '',
  },
};

export default SearchBar;

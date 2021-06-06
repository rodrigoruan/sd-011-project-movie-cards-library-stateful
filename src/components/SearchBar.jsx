// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      teste: '',
      teste2: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      teste: event.target.value,
      teste2: event.target.value,
    });
  }

  render() {
    const { teste, teste2 } = this.state;
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
              data-testid="text-input-label"
              type="text"
              value={ teste }
              onChange={ this.handleChange }
              name="onSearchTextChange"
              id="onSearchTextChange"
            />
          </label>

          <label htmlFor="onSearchTextChange" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              value={ teste2 }
              onChange={ this.handleChange }
              name="onSearchTextChange"
              id="onSearchTextChange"
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

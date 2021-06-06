// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      onSearchTextChange: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
      onSearchTextChange: event.target.value,
    });
  }

  render() {
    const { searchText, onSearchTextChange } = this.state;
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
          <label htmlFor="searchText">
            Inclui o texto:
            <input
              data-testid="text-input-label"
              type="text"
              value={ searchText }
              onChange={ this.handleChange }
              name="searchText"
              id="searchText"
            />
          </label>

          <label htmlFor="onSearchTextChange">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input-label"
              type="checkbox"
              value={ onSearchTextChange }
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

// SearchBar.propTypes = {
//   movie: PropTypes.shape({
//     searchText: PropTypes.string,
//     onSearchTextChange: PropTypes.func,
//     bookmarkedOnly: PropTypes.bool,
//     onBookmarkedChange: PropTypes.func,
//     selectedGenre: PropTypes.string,
//     onSelectedGenreChange: PropTypes.func,

//   }),
// };

// SearchBar.defaultProps = {
//   movie: {
//     searchText: '',
//     onSearchTextChange: '',
//     bookmarkedOnly: '',
//     onBookmarkedChange: '',
//     selectedGenre: '',
//     onSelectedGenreChange: '',
//   },
// };

export default SearchBar;

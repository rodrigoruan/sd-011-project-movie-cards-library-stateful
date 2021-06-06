// implement AddMovie component here
import React from 'react';

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
          <label htmlFor="teste">
            Inclui o texto:
            <input
              data-testid="text-input-label"
              type="text"
              value={ teste }
              onChange={ this.handleChange }
              name="teste"
              id="teste"
            />
          </label>

          <label htmlFor="teste">
            Input Teste 2:
            <input
              type="text"
              value={ teste2 }
              onChange={ this.handleChange }
              name="teste2"
              id="teste2"
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

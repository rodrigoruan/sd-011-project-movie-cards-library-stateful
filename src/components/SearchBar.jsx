// implement AddMovie component here
import React from 'react';

/* searchText, uma string
onSearchTextChange, uma callback
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:
            <input type="text" value= { searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
           
          <label data-testid="checkbox-input-label" >Mostrar somente favoritos
            <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input"/>
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;

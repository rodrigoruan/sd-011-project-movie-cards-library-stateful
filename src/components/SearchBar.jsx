import React from 'react';

class SearchBar extends React.Component {
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
          <label data-testid="text-input-label">
            <span>Inclui o texto:</span>
            
            <input
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />

          </label>

          {/* <br /> provisorio */}
          <br />

          <label data-testid="checkbox-input-label">
            <span>Mostrar somente favoritos</span>

            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
            
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;

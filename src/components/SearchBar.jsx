import React from 'react';

class SearchBar extends React.Component {

  render() {

    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return(
      <form data-testid="search-bar-form" action='' method='get' className="query">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" placeholder="Busque aqui" rows='1' cols='2' value={searchText} onChange={onSearchTextChange}></input>
      </form>
    )
  }
}

export default SearchBar;

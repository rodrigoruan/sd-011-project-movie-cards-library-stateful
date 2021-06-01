// implement AddMovie component here
import React from 'react'

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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
          <input
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          >
          </input>
        </label>

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos"
          <input 
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
           />
        </label>
        

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre} name="" id="">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
     );
  }
}
 
export default SearchBar;

SearchBar.PropTypes.shape =({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  })

import React from 'react';
import PropTypes from 'prop-types';




  class SearchBar extends React.Component {
    render() {
      const {
        search: {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre
        }
      } = this.props;

      return (
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto
            <input 
            data-testid="text-input"
            type= "text"
            value={searchText}
            onChange={onSearchTextChange}
            />
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar favoritos
            <input data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            />
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input"
            type='select'
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            >
              <option data-testid="select-option" value= "">Todos</option>
              <option data-testid="select-option" value= "action">Ação</option>
              <option data-testid="select-option" value= "comedy">Comédia</option>
              <option data-testid="select-option" value= "thriller">Suspense</option>
            </select>
          </label>
        </form>

      );
    }
  }

  export default SearchBar;

  SearchBar.proptypes = {
    search: PropTypes.shape {
      searchText: Proptypes.string,
      onSearchTextChange = Proptypes.function,
      bookmarkedOnly = Proptypes.function,
      onBookmarkedChange = Proptypes.function,
      selectedGenre = Proptypes.string,
      onSelectedGenreChange = Proptypes.function,
    }
  }

import React from 'react';
import PropTypes from 'prop-types';

/* Requisito 1 */
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
      /* Requisito 2 */
      <form data-testid="search-bar-form">
        {/* Requisito 3 */}
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto
          <input
            name="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            type="text"
          />
        </label>
        {/* Requisito 4 */}
        <label data-testid="checkbox-input-label" htmlFor="text">
          Mostrar somente favoritos
          <input
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            type="checkbox"
          />
        </label>
        {/* Requisito 5 */}
        <label data-testid="select-input-label" htmlFor="text">
          Filtrar por gênero
                    <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >

            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>

          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

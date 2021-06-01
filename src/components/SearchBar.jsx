import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search" data-testid="text-input-label" className="section-search">
        Inclui o texto:
        <input
          id="search"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          className="searchbox"
        />
      </label>
    );
  }

  renderCheckboxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="favorite" data-testid="checkbox-input-label" className="check">
        Mostrar somente favoritos
        <input
          id="favorite"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          className="checkbox"
        />
      </label>
    );
  }

  renderSelectInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="filter" data-testid="select-input-label" className="section-select">
        Filtrar por gênero
        <select
          id="filter"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          className="select"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form" className="section-form-search">
        {this.renderTextInput()}
        { this.renderCheckboxInput() }
        { this.renderSelectInput() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;

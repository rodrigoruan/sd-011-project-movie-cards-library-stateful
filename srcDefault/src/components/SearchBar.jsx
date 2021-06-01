import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import '../App.css';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.inputText = this.inputText.bind(this);
  }

  inputText = () => {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="InputTextId" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="InputTextId"
            data-testid="text-input"
            size="lg"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </div>
    );
  };

  render() {
    const { bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div data-testid="search-bar-form" className="col">
        {this.inputText()}
        <div>
          <label htmlFor="checkboxInputId" data-testid="checkbox-input-label">
            <input
              id="checkboxInputId"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              className="ml-3"
              label=""
            />

            Mostrar somente favoritos
          </label>
        </div>
        {/* INPUT SELECT OPTIONS */}
        <div className="genderMovieInput">
          <label htmlFor="searchBarSelectId" data-testid="select-input-label">
            Filtrar por gênero:
            <select
              id="searchBarSelectId"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              as="select"
            >
              <option value="" data-testid="select-option">
                Todos
              </option>
              <option value="action" data-testid="select-option">
                Ação
              </option>
              <option value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option value="thriller" data-testid="select-option">
                Suspense
              </option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

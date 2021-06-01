/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';
import SearchBarCheckBox from './SearchBarCheckBox';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.handleEvents = this.handleEvents.bind(this);
  }

  handleEvents({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
      <form data-testid="search-bar-form">
        <SearchBarInput value={ searchText } value2={ onSearchTextChange } />
        <SearchBarCheckBox value={ onBookmarkedChange } value2={ bookmarkedOnly } />
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="select"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.searchText = this.searchText.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.selectedGenre = this.selectedGenre.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = this.props;
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              name="searchText"
              value={ searchText }
              onChange={ this.onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ this.onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
            <input
              type="select"
              name="selectedGenre"
              value={ selectedGenre }
              onChange={ this.onSelectedGenreChange }
              data-testid="select-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;

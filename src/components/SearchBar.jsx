import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label"> "Inclui o texto:"
            <input type='text' data-testid="text-input" value={this.props.searchText}
            onChange={this.props.onSearchTextChange} />
          </label>

          <label data-testid="checkbox-input-label"> "Mostrar somente favoritos"
            <input type='checkbox' data-testid="checkbox-input" checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange} />
          </label>

          <label data-testid="select-input-label"> "Filtrar por gênero"
            <select data-testid="select-input" value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange} >
              <option data-testid="select-option" value=''>
                Todos
              </option>
              
              <option data-testid="select-option" value='action'>
                Ação
              </option>

              <option data-testid="select-option" value='comedy'>
                Comédia
              </option>

              <option data-testid="select-option" value='thriller'>
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

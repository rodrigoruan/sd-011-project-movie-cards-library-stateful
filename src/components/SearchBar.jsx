import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label"> "Inclui o texto:"
            <input value={this.props.searchText} onChange={this.props.onSearchTextChange}
            data-testid="text-input" />
          </label>

        </form>
      </div>
    )
  }
}

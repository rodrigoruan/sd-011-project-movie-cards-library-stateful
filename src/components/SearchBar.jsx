// implement AddMovie component here
import React from 'react'

class SearchBar extends React.Component {
  render() {
    const {{ search: searchText, 
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    }
    } = this.props
    return(
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label"> Inclui o texto:
          <input 
          type='text'
          onChange="onSearchTextChange"
          ></input>
        </label>
      </form>
    )
  }
}
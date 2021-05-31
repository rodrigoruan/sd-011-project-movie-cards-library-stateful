import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
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
      <div>
        <section>
          <form data-testid="search-bar-form"></form>
        </section>
      </div>
    )
  }
}

SearchBar.propTypes = {

}
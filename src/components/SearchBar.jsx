// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const {
    //   searchText, onSearchTextChange, bookmarkedOnly,
    //   onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form className="search-bar-form">
          <input type="text" placeholder="Inclui o texto:" />
        </form>

      </div>
    );
  }
}

export default SearchBar;

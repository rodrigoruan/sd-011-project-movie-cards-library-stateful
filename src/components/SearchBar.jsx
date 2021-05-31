import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
        return (
            searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange
        )
    }
}

export default SearchBar;
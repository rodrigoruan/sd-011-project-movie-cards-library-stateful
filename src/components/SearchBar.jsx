import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
        return (
            <fieldset>
                <form data-testid="search-bar-form">     
                </form>
            </fieldset>            
        )
    }
}

export default SearchBar;
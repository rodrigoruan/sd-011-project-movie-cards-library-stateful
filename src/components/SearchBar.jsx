import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

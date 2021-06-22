import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render() {
        const {
            searchText,
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
        } = this.props;
        return (
            <form data-testid="search-bar-form">
                <label data-testid="text-input-label" htmlFor="text">
                    Inclui o texto
                    <input
                        value={searchText}
                        onChange={onSearchTextChange}
                        data-testid="text-input"
                        type="text"
                    />
                </label>
                <label data-testid="checkbox-input-label" htmlFor="text">
                    Mostrar somente favoritos
                    <input
                        checked={bookmarkedOnly}
                        onChange={onBookmarkedChange}
                        data-testid="checkbox-input"
                        type="checkbox"
                    />
                </label>
            </form>
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

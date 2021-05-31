import React from 'react';
import PropTypes from 'prop-types';

class SerarchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
              value={ searchText }
            />
          </label>
        </form>
      </div>
    );
  }
}

SerarchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
//   bookmarkedOnly: PropTypes.string,
//   onBookmarkedChange: PropTypes.string,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.string,
};

export default SerarchBar;

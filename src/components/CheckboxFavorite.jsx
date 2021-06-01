import React from 'react';
import PropTypes from 'prop-types';

class checkboxFavorite extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange, searchText } = this.props;

    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          value={ searchText }
          name="searchBar"
          placeholder="Search..."
        />
      </label>
    );
  }
}

export default checkboxFavorite;

checkboxFavorite.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

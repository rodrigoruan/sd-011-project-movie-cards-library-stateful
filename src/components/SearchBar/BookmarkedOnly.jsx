import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookmarkedOnly extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          name="bookmarkedOnly"
        />
      </label>
    );
  }
}
export default BookmarkedOnly;

BookmarkedOnly.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

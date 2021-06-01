import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookmarkedOnly extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="input-checkbox"
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

export default BookmarkedOnly;

BookmarkedOnly.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

BookmarkedOnly.defaultProps = {
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
};

import React, { Component } from 'react';
import { bool, func } from 'prop-types';

class BookmarkedOnly extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          id="input-checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

BookmarkedOnly.propTypes = {
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
}.isRequired;

export default BookmarkedOnly;

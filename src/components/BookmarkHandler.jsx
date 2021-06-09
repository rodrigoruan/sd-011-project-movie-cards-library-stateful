import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookmarkHandler extends Component {
  render() {
    const { bookmarkedOnly, onChange } = this.props;

    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
        className="label"
      >
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          checked={ bookmarkedOnly }
          data-testid="checkbox-input"
          onChange={ onChange }
          className="bookmark"
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

BookmarkHandler.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookmarkHandler;

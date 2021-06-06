import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookmarkHandler extends Component {
  render() {
    const { checked, onChange } = this.props;

    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
        className="label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ checked }
          data-testid="checkbox-input"
          onChange={ onChange }
          className="bookmark"
        />
      </label>
    );
  }
}

BookmarkHandler.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookmarkHandler;

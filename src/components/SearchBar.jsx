import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="input">
            Inclui o texto:
          </label>
          <input type="text" data-testid="text-input" id="input" />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="checkbox">
            Mostrar somente favoritos
          </label>
          <input onChange="onBookmarkedChange" checked="" type="checkbox" id="checkbox" data-testid="checkbox-input" />
        </div>
      </form>
    );
  }
}

export default SearchBar;

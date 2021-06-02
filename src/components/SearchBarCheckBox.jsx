import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBarCheckBox extends Component {
  render() {
    const { value, value2 } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ value2 }
          onChange={ value }
        />
      </label>
    );
  }
}

SearchBarCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};

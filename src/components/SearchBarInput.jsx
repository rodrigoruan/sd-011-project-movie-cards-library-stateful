import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBarInput extends Component {
  render() {
    const { value, value2 } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="searchText"
          data-testid="text-input"
          type="text"
          value={ value }
          onChange={ value2 }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  value: PropTypes.string.isRequired,
  value2: PropTypes.func.isRequired,
};

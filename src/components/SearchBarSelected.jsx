import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBarSelected extends Component {
  render() {
    const { value, value2 } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select"
          data-testid="select-input"
          value={ value }
          onChange={ value2 }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SearchBarSelected.propTypes = {
  value: PropTypes.number.isRequired,
  value2: PropTypes.number.isRequired,
};

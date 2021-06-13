import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectedInputGenre extends Component {
  render() {
    const { selectedGenre, onChange } = this.props;
    return (
      <label htmlFor="selected-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onChange }
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

SelectedInputGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

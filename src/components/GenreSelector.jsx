import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GenreSelector extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genreSelector"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="genreSelector"
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
        >
          <option
            value=""
            data-testid="select-option"
          >
            Todos
          </option>

          <option
            value="action"
            data-testid="select-option"
          >
            Ação
          </option>

          <option
            value="comedy"
            data-testid="select-option"
          >
            Comédia
          </option>

          <option
            value="thriller"
            data-testid="select-option"
          >
            Suspense
          </option>

        </select>
      </label>
    );
  }
}

GenreSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default GenreSelector;

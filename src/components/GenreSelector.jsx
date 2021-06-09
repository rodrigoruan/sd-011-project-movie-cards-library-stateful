import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreSelector extends Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label
        htmlFor="selectedGenre"
        data-testid="select-input-label"
        className="label"
      >
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ value }
          onChange={ handler }
          data-testid="select-input"
          className="select"
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
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default GenreSelector;

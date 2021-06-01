// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { value, funcOnChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          value={ value }
          name="genre"
          onChange={ funcOnChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  value: PropTypes.string.isRequired,
  funcOnChange: PropTypes.func.isRequired,
};

export default GenreSelect;

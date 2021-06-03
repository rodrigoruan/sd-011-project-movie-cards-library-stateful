import React from 'react';
import PropTypes from 'prop-types';

class GenreSearch extends React.Component {
  render() {
    const { selectedGenre, functionSelecGenre } = this.props;
    return (
      <label
        htmlFor="select-input"
        data-testid="select-input-label"
        className="label-box"
      >
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ functionSelecGenre }
          data-testid="select-input"
          className="input-box"
          name="selectedGenre"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSearch.propTypes = {
  selectedGenre: PropTypes.string,
  functionSelecGenre: PropTypes.func,
};

GenreSearch.defaultProps = {
  selectedGenre: '',
  functionSelecGenre: () => {},
};

export default GenreSearch;

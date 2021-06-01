import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { stateModify, genre } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ stateModify }
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

export default SelectGenre;

SelectGenre.propTypes = {
  stateModify: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

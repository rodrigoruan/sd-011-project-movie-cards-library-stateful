import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { genre, hadleState } = this.props;

    return (
      <label
        data-testid="genre-input-label"
        htmlFor="inputAddMovie"
      >
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ hadleState }
          name="genre"
          id="inputAddMovie"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default InputSelect;

InputSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};

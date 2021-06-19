import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelect extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="select-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="select-genre"
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChanges }
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
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

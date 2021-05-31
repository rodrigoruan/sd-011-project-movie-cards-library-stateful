import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateSelect extends Component {
  render() {
    const { value, handleUserInput } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ handleUserInput }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

CreateSelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleUserInput: PropTypes.func.isRequired,
};

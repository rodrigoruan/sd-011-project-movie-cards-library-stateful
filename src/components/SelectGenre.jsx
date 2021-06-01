import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const {
      value,
      inputFunction,
    } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ inputFunction }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  value: PropTypes.string.isRequired,
  inputFunction: PropTypes.func.isRequired,
};

export default SelectGenre;

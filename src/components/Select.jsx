import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Select extends Component {
  render() {
    const { changeState, genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ changeState }
          value={ genre }
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

export default Select;

Select.propTypes = {
  changeState: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

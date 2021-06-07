import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Genre extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select data-testid="genre-input" name="genre" value={ value } onChange={ onChange }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.defaultProps = {
  onChange: Proptypes.function,
  value: Proptypes.string,
};

Genre.proptypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
};

export default Genre;

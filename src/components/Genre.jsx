import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="genre-id" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-id"
          data-testid="genre-input"
          value={ value }
          onChange={ inputRead }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  inputRead: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Genre;

import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name={ name }
          defaultValue={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

MovieGenre.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieGenre;

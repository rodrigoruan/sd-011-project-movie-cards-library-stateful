import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          type="select"
          value={ value }
          onChange={ onChange }
          name="genre"
          data-testid="genre-input"
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default GenreInput;

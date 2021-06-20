import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="AddMovie__select"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="AddMovie__select"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSelect;

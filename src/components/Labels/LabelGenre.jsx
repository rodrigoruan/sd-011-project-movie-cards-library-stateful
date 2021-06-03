import React from 'react';
import PropTypes from 'prop-types';

class LabelGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="genre-input"
        data-testid="genre-input-label"
        className="label-box"
      >
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
          className="input-box"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

LabelGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelGenre;

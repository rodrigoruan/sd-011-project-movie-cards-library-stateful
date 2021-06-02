import React from 'react';
import PropTypes from 'prop-types';

class SelectedGenre extends React.Component {
  render() {
    const { handlerChange } = this.props;
    const { genre } = this.props;
    return (
      <div className="form">
        <label htmlFor="text6" data-testid="genre-input-label">
          Gênero
          <select
            id="text6"
            data-testid="genre-input"
            type="text"
            name="genre"
            value={ genre }
            onChange={ handlerChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectedGenre.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default SelectedGenre;

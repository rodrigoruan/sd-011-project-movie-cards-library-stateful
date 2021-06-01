import React from 'react';
import PropTypes from 'prop-types';

class OtherInputs extends React.Component {
  render() {
    const { state: { storyline, rating, genre }, handleChanges } = this.props;
    return (
      <fieldset>
        <label htmlFor="textarea-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="textarea-input"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChanges }
          />
        </label>
        <label htmlFor="number-input" data-testid="rating-input-label">
          Avaliação
          <input
            id="number-input"
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChanges }
          />
        </label>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ handleChanges }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

OtherInputs.propTypes = {
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChanges: PropTypes.func.isRequired,
};

export default OtherInputs;

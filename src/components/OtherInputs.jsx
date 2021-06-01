import React from 'react';

class OtherInputs extends React.Component {
  render() {
    const { state: { storyline, rating }, handleChanges } = this.props;
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

export default OtherInputs;

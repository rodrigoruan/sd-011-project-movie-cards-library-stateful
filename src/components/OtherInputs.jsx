import React from 'react';

class OtherInputs extends React.Component {
  render() {
    const { storyline, handleChanges, rating } = this.props;
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
      </fieldset>
    );
  }
}

export default OtherInputs;

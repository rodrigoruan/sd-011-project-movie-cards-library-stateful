import React from 'react';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ handleChange }
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

export default Genre;

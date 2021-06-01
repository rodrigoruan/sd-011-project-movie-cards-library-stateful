import React, { Component } from "react";

class SelectGenre extends Component {
  render() {
    const { value, inputFunction } = this.props;
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ inputFunction }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default SelectGenre;

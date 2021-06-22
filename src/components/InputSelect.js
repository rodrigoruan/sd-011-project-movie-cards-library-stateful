import React, { Component } from 'react';

export default class InputSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'action',
    };
  }

  render() {
    const { action } = this.state;

    return (
      <div>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select id="select-input" data-testid="genre-input">
            <option data-testid="genre-option" value={ action }>
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
      </div>
    );
  }
}

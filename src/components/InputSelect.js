import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'action',
      // imagePath: '',
      // storyline: '',
      // genre: 'action',
    };
  }

  render() {
    const { action } = this.state;
    const { selectGenre } = this.props;
    const { onSelectedGenreChange } = this.props;

    return (
      <div>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            onChange={ onSelectedGenreChange }
            value={ selectGenre }
            id="select-input"
            data-testid="genre-input"
          >
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

InputSelect.propTypes = {
  selectGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

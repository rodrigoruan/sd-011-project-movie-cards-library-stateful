import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectLabel extends Component {
  render() {
    const { functionCall, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ value }
          data-testid="genre-input"
          name="genre"
          onChange={ functionCall }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = {
  value: PropTypes.string.isRequired,
  functionCall: PropTypes.func.isRequired,
};

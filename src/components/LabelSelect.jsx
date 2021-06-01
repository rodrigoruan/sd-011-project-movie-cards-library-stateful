import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSelect extends Component {
  render() {
    const { valueSelect, func } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ valueSelect }
          onChange={ func }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default LabelSelect;

LabelSelect.propTypes = {
  valueSelect: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

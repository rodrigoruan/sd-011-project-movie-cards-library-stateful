import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Genre extends Component {
  render() {
    const { initialValue } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="text"
          name="genre"
          oncChange={ initialValue }
          data-testid="genre-input"
        >
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  initialValue: PropTypes.func,
};

Genre.defaultProps = {
  initialValue: 'undefined',
};

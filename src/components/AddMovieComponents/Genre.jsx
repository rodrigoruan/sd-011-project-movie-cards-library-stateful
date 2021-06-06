import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Genre extends Component {
  render() {
    const { onChange, defaultValue } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          // defaultValue={ defaultValue }
          value={ defaultValue }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.defaultProps = {
  onChange: PropTypes.function,
  defaultValue: 'Stranger',
};

Genre.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

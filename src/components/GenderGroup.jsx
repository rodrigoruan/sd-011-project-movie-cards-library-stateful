import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class GenderGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="genderMovieInput">
        <label htmlFor="selectInput" data-testid="genre-input-label">
          Gênero
          <select
            id="selectInput"
            name="genre"
            value={ value }
            onChange={ onChange }
            data-testid="genre-input"
            as="select"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

GenderGroup.defaultProps = {
  value: 'value',
  onChange: 'onChange',
};

GenderGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

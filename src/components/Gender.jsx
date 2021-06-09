import React from 'react';
import PropTypes from 'prop-types';

class Gender extends React.Component {
  render() {
    const { value, functionOnChange } = this.props;
    return (
      <div>
        <label
          htmlFor="genre-input-label"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            name="genre"
            value={ value }
            onChange={ functionOnChange }
            data-testid="genre-input"
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
      </div>);
  }
}
Gender.propTypes = {
  value: PropTypes.string.isRequired,
  functionOnChange: PropTypes.func.isRequired,
};
export default Gender;

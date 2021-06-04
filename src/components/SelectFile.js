import React from 'react';
import propTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select-label">
        { label }
        <select
          data-testid="genre-input"
          type="select"
          name="genre"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = ({
  label: propTypes.string,
  onChange: propTypes.func,
}).isRequired;

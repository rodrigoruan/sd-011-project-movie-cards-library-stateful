import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          type="select"
          id="select"
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">
            Todos
          </option>
          <option data-testid="select-option" value="action">
            Ação
          </option>
          <option data-testid="select-option" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Select;

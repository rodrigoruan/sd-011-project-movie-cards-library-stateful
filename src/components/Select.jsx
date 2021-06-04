import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onChange, dataTestid, labelValue } = this.props;
    return (
      <label htmlFor="select" data-testid="select-input-label">
        {labelValue}
        <select
          type="select"
          id="select"
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
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
  onChange: PropTypes.func.isRequired,
  labelValue: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Select;

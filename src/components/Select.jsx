import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends React.Component {
  render() {
    const {
      labelText,
      labelDataTestId,
      name,
      value,
      onChange,
      selectDataTestId,
      options,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelDataTestId }
      >
        { labelText }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ selectDataTestId }
        >
          {
            options.map((option, index) => (
              <Option
                key={ index }
                option={ option }
              />
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelDataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectDataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    dataTestId: PropTypes.string,
  })).isRequired,
};

export default Select;

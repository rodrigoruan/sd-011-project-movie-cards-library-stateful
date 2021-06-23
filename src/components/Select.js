import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends React.Component {
  render() {
    const {
      text,
      test,
      name,
      value,
      change,
      options,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ (test === '') ? `${name}-input-label` : `${test}-input-label` }
      >
        { text }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ change }
          data-testid={ (test === '') ? `${name}-input` : `${test}-input` }
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
  text: PropTypes.string.isRequired,
  test: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    dataTestId: PropTypes.string,
  })).isRequired,
};

Select.defaultProps = {
  test: '',
};

export default Select;

import React from 'react';
import propTypes from 'prop-types';

class InputFile extends React.Component {
  render() {
    const { label, name, value, onChange, type } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-label` }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

export default InputFile;

InputFile.propTypes = ({
  label: propTypes.string,
}).isRequired;

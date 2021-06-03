import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  render() {
    const { textcall, inputName, value, handleChange } = this.props;
    return (
      <label
        htmlFor={ `${inputName}-input` }
        data-testid={ `${inputName}-input-label` }
        className="label-box"
      >
        {textcall}
        <input
          name={ inputName }
          type="text"
          value={ value }
          onChange={ handleChange }
          data-testid={ `${inputName}-input` }
          className="input-box"
        />
      </label>
    );
  }
}

Label.propTypes = {
  textcall: PropTypes.string,
  inputName: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Label;

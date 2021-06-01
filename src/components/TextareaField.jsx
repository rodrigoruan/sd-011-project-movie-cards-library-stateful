import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextareaField extends Component {
  render() {
    const { name, title, value, handleState } = this.props;
    return (
      <label htmlFor={ name }>
        { title}
        <textarea
          name={ name }
          value={ value }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default TextareaField;

TextareaField.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  handleState: PropTypes.func,
};

TextareaField.defaultProps = {
  name: '',
  title: '',
  value: '',
  handleState: () => {},
};

import React from 'react';

class NewInput extends React.Component {
  render() {
    const { type,
      name,
      value,
      dataTestid,
      onChange,
      inputType } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        data-testid={ dataTestid }
        onChange={ onChange }
      />
    );
  }
}

export default NewInput;

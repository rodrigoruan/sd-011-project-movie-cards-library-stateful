import React, { Component } from 'react';

export default class LabelNumber extends Component {
  render() {
    const { data, name, value, nameInput, func, dataInput } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input type="Number" value={ value } name={ nameInput } data-testid={ dataInput } onChange={ func } />
      </label>
    );
  }
}

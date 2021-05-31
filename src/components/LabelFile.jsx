import React, { Component } from 'react';

export default class LabelFile extends Component {
  render() {
    const { data, value, name, nameInput, dataInput, func } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input type="file" value={ value } name={ nameInput } data-testid={ dataInput } onChange={ func } />
      </label>
    );
  }
}

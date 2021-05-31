import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { func, name, type } = this.props;
    return (
      <button type={ type } onClick={ func }>{ name }</button>
    );
  }
}

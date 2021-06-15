// implement AddMovie component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="myLabel" data-testid="search-bar-form">
          <input name="name" type="text" placeholder="escreva algo" />
        </label>
        <label
          htmlFor="label"
          data-testid="text-input-label"
          value={ this.props }
        >
          <input name="name" type="text" placeholder="escreva algo" />
        </label>
        <label htmlFor="label">
          <input name="name" type="text" placeholder="3° input" />
        </label>
      </form>
    );
  }
}

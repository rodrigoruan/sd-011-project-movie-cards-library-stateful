// implement AddMovie component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="myLabel">
          <input name="name" type="text" placeholder="escreva algo" />
        </label>
      </form>
    );
  }
}

import React, { Component } from 'react';
import SearchInput from './SearchInput';
import InputSubitile from './InputSubitile';

// const [ title, setTitle ] = React.useState('')
export default class AddMovie extends Component {
  handleChange = (ev) => {
    console.log(ev.target.value);
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        <SearchInput handleChange={ this.handleChange } />
        <InputSubitile />
      </form>
    );
  }
}

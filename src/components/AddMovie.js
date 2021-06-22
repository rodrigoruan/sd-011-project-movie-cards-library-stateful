import React, { Component } from 'react';
import SearchInput from './SearchInput';
import InputSubitile from './InputSubitile';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';
import ButtonForm from './ButtonForm';

// const [ title, setTitle ] = React.useState('')
export default class AddMovie extends Component {
  handleClick(ev) {
    // console.log(ev.target.value);
    return ev.target.value;
  }

  onSearchTextChange = (ev) => {
    console.log(ev.target.value);
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        <SearchInput onSearchTextChange={ this.onSearchTextChange } />
        <InputSubitile />
        <InputImage />
        <InputTextArea />
        <InputNumber />
        <InputSelect />
        <ButtonForm onClick={ this.handleClick } />
      </form>
    );
  }
}

import React, { Component } from 'react';
import InputTitle from './InputsForm/InputTitle';
import InputSubtitle from './InputsForm/InputSubtitle';
import InputImage from './InputsForm/InputImage';
import InputSinopse from './InputsForm/InputSinopse';
import InputAvaliacao from './InputsForm/InputAvaliacao';
import InputGenero from './InputsForm/InputGenero';
import Button from './InputsForm/InputButton';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <InputTitle />
        <InputSubtitle />
        <InputImage />
        <InputSinopse />
        <InputAvaliacao />
        <InputGenero />
        <Button />
      </form>
    );
  }
}

export default AddMovie;

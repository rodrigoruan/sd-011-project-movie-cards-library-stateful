import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputsForm/InputTitle';
import InputSubtitle from './InputsForm/InputSubtitle';
import InputImage from './InputsForm/InputImage';
import InputSinopse from './InputsForm/InputSinopse';
import InputAvaliacao from './InputsForm/InputAvaliacao';
import InputGenero from './InputsForm/InputGenero';
import Button from './InputsForm/InputButton';

const info = {
  subtitle: '',
  title: '',
  imagePath: '',
  Storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = info;
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } />
        <InputSubtitle value={ subtitle } />
        <InputImage value={ imagePath } />
        <InputSinopse value={ storyline } />
        <InputAvaliacao value={ rating } />
        <InputGenero value={ genre } />
        <Button value={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

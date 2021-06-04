import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputsForm/InputTitle';
import InputSubtitle from './InputsForm/InputSubtitle';
import InputImage from './InputsForm/InputImage';
import InputSinopse from './InputsForm/InputSinopse';
import InputAvaliacao from './InputsForm/InputAvaliacao';
import InputGenero from './InputsForm/InputGenero';

const info = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = info;
    this.handlerChange = this.handlerChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handlerChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  reset() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(info);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handlerChange={ this.handlerChange } />
        <InputSubtitle value={ subtitle } handlerChange={ this.handlerChange } />
        <InputImage value={ imagePath } handlerChange={ this.handlerChange } />
        <InputSinopse value={ storyline } handlerChange={ this.handlerChange } />
        <InputAvaliacao value={ rating } handlerChange={ this.handlerChange } />
        <InputGenero value={ genre } handlerChange={ this.handlerChange } />
        <button
          type="button"
          onClick={ this.reset }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;

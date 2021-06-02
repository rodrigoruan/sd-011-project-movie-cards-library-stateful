// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import TextLabel from './TextLabel';
import SelectLabel from './SelectLabel';
import ButtonLabel from './ButtonLabel';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          data="title-input-label"
          value={ title }
          name="Título"
          inputName="title"
          inputData="title-input"
          inputType="text"
          functionCall={ this.handleChange }
        />
        <InputLabel
          data="subtitle-input-label"
          value={ subtitle }
          name="Subtítulo"
          inputName="subtitle"
          inputData="subtitle-input"
          inputType="text"
          functionCall={ this.handleChange }
        />
        <InputLabel
          data="image-input-label"
          value={ imagePath }
          name="Imagem"
          inputName="imagePath"
          inputData="image-input"
          inputType="text"
          functionCall={ this.handleChange }
        />
        <TextLabel value={ storyline } functionCall={ this.handleChange } />
        <InputLabel
          data="rating-input-label"
          value={ rating }
          name="Avaliação"
          inputName="rating"
          inputData="rating-input"
          inputType="number"
          functionCall={ this.handleChange }
        />
        <SelectLabel functionCall={ this.handleChange } value={ genre } />
        <ButtonLabel functionCall={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

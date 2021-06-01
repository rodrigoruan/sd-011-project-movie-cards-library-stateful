import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectGenre from './SelectGenre';
import TextAreaStory from './TextAreaStory';
import InputNumber from './InputNumberRating';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeValues = this.changeValues.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValues({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelData="title-input-label"
          htmlFor="title-input"
          labelText="Título"
          inputName="title"
          inputData="title-input"
          inputValue={ title }
          inputFunction={ this.changeValues }
        />
        <InputText
          labelData="subtitle-input-label"
          htmlFor="subtitle-input"
          labelText="Subtítulo"
          inputName="subtitle"
          inputData="subtitle-input"
          inputValue={ subtitle }
          inputFunction={ this.changeValues }
        />
        <InputText
          labelData="image-input-label"
          htmlFor="image-input"
          labelText="Imagem"
          inputName="imagePath"
          inputData="image-input"
          inputValue={ imagePath }
          inputFunction={ this.changeValues }
        />
        <TextAreaStory value={ storyLine } inputFunction={ this.changeValues } />
        <InputNumber inputValue={ rating } inputFunction={ this.changeValues } />
        <SelectGenre value={ genre } inputFunction={ this.changeValues } />
        <ButtonAddMovie funcClick={ this.clickButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

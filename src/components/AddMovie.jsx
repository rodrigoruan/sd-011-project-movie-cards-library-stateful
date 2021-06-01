import React, { Component } from 'react';
import InputText from './InputText';
import SelectGenre from './SelectGenre';
import TextAreaStory from './TextAreaStory';
import InputNumber from './InputNumberRating';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeValues = this.changeValues.bind(this);
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

  resetState() {
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
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText labelData="title-input-label"
          labelText="Título"
          inputName="title"
          inputData="title-input"
          dataType="text"
          inputValue={ title }
          inputFunction={ this.changeValues }
        />
        <InputText labelData="subtitle-input-label"
          labelText="Subtítulo"
          inputName="subtitle"
          inputData="subtitle-input"
          dataType="text"
          inputValue={ subtitle }
          inputFunction={ this.changeValues }
        />
        <InputText labelData="image-input-label"
          labelText="Imagem"
          inputName="imagePath"
          inputData="image-input"
          inputValue={ imagePath }
          inputFunction={ this.changeValues }
        />
        <TextAreaStory
          value={ storyLine }
          inputFunction={ this.changeValues }
        />
        <InputNumber
          inputValue={ rating }
          inputFunction={ this.changeValues }
        />
        <SelectGenre value={ genre } inputFunction={ this.changeValues } />
        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

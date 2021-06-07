// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputText from './InputText';
import InputImage from './InputImage';
import InputNumber from './InputNumber';
import SelectLabel from './SelectLabel';
import InputTextArea from './InputTextArea';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  toChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  restoreState = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  submit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.restoreState();
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          value={ title }
          nameInput="title"
          dataInput="title-input"
          func={ this.toChange }
          name="Título"
          data="title-input-label"
        />
        <InputText
          value={ subtitle }
          nameInput="subtitle"
          dataInput="subtitle-input"
          func={ this.toChange }
          name="Subtítulo"
          data="subtitle-input-label"
        />
        <InputImage
          data="image-input-label"
          value={ imagePath }
          nameInput="imagePath"
          name="Imagem"
          dataInput="image-input"
          func={ this.toChange }
        />
        <InputTextArea
          value={ storyLine }
          func={ this.toChange }
        />
        <InputNumber
          value={ rating }
          nameInput="rating"
          dataInput="rating-input"
          func={ this.toChange }
          name="Avaliação"
          data="rating-input-label"
        />
        <SelectLabel
          value={ genre }
          func={ this.toChange }
        />
        <Button func={ this.submit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// implement AddMovie component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
      storyline: '',
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

  submit = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.restoreState();
  }

  restoreState = () => { // Rodolfo me ajudou nessa
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
        <InputText
          data="title-input-label"
          value={ title }
          nameInput="title"
          name="Título"
          dataInput="title-input"
          func={ this.toChange }
        />
        <InputText
          data="subtitle-input-label"
          value={ subtitle }
          nameInput="subtitle"
          name="Subtítulo"
          dataInput="subtitle-input"
          func={ this.toChange }
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
          func={ this.toChange }
          value={ storyline }
        />
        <InputNumber
          data="rating-input-label"
          value={ rating }
          nameInput="rating"
          name="Avaliação"
          dataInput="rating-input"
          func={ this.toChange }
        />
        <SelectLabel value={ genre } func={ this.toChange } />
        <Button func={ this.submit } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

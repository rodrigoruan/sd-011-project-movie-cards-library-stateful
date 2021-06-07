// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';
import SelectLabel from './SelectLabel';
import Button from './Button';

class AddMovie extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state({
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
    onClick();
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          value={ title }
          nameInput={ title }
          dataInput="title-input"
          func={ this.submit }
          name="Título"
          data="title-input-label"
        />
        <InputText
          value={ subtitle }
          nameInput={ subtitle }
          dataInput="subtitle-input"
          func={ this.subtmit }
          name="Subtítulo"
          data="subtitle-input-label"
        />
        <InputText
          value={ imagePath }
          nameInput={ imagePath }
          dataInput="image-input"
          func={ this.subtmit }
          name="Imagem"
          data="image-input-label"
        />
        <InputTextArea
          value={ storyLine }
          func={ this.subtmit }
        />
        <InputNumber
          value={ rating }
          nameInput={ rating }
          dataInput="rating-input"
          func={ this.submit }
          name="Avaliação"
          data="rating-input-label"
        />
        <SelectLabel
          value={ genre }
          func={ this.submit }
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

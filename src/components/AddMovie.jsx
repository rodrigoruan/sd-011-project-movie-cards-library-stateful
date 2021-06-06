import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputComp from './InputComp';
import ImputText from './ImputText';
import SelectComp from './SelectComp';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form action="">
        <InputComp
          data="title-input-label"
          value={ title }
          name="Título"
          inputName="title"
          inputData="title-input"
          inputType="text"
          func={ this.handleChange }
        />
        <InputComp
          data="subtitle-input-label"
          value={ subtitle }
          name="Subtítulo"
          inputName="subtitle"
          inputData="subtitle-input"
          inputType="text"
          func={ this.handleChange }
        />
        <InputComp
          data="image-input-label"
          value={ imagePath }
          name="Imagem"
          inputName="imagePath"
          inputData="image-input"
          inputType="text"
          func={ this.handleChange }
        />
        <ImputText value={ storyline } func={ this.handleChange } />
        <SelectComp label="Gênero" value={ genre } onChange={ this.handleChange } />
        <InputComp
          data="rating-input-label"
          value={ rating }
          name="Avaliação"
          inputName="rating"
          inputData="rating-input"
          inputType="number"
          func={ this.handleChange }
        />
        <button type="submit" data-testid="send-button" onClick={ this.resetState }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

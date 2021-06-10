// implement AddMovie component here

// 6 - Crie um componente chamado <AddMovie />
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelInput from './inputs/LabelInput';
import LabelSelect from './inputs/LabelSelect';
import LabelTextArea from './inputs/LabelTextArea';
import LabelNumber from './inputs/LabelNumber';
import Button from './inputs/Button';

const objeto = {
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
    this.state = objeto;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
    this.setState(objeto);
  }

  // 7 - Renderize um formulário dentro de <AddMovie />
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // 8 - Renderize um input do tipo texto para obter título do novo
      <form data-testid="add-movie-form">
        <LabelInput
          id="title-input-label"
          name="Título"
          idInput="title-input"
          nameInput="title"
          valueInput={ title }
          funcInput={ this.handleChange }
        />
        {/* 9 - Renderize um input do tipo texto para obter subtítulo do novo fime */}
        <LabelInput
          id="subtitle-input-label"
          name="Subtítulo"
          idInput="subtitle-input"
          nameInput="subtitle"
          valueInput={ subtitle }
          funcInput={ this.handleChange }
        />
        {/* 10 - Renderize um input do tipo texto para obter imagem do novo fime */}
        <LabelInput
          id="image-input-label"
          name="Imagem"
          idInput="image-input"
          nameInput="imagePath"
          valueInput={ imagePath }
          funcInput={ this.handleChange }
        />
        {/* 11 - Renderize uma textarea para obter a sinopse do novo filme */}
        <LabelTextArea valueInput={ storyline } func={ this.handleChange } />
        {/* 12 - Renderize um input do tipo number para obter avaliação do novo filme */}
        <LabelNumber
          id="rating-input-label"
          name="Avaliação"
          idInput="rating-input"
          nameInput="rating"
          valueInput={ rating }
          funcInput={ this.handleChange }
        />
        {/* 13 - Renderize um select para selecionar o gênero do novo filme */}
        <LabelSelect valueSelect={ genre } func={ this.handleChange } />
        {/* 14 - Renderize um botão para fazer uso dos dados do novo filme */}
        <Button clickFunction={ this.handleSubmit } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

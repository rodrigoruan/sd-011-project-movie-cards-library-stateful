import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTextForm from './InputTextForm';
import InputNumberForm from './InputNumberForm';
import InputSelectForm from './InputSelectForm';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const optionsData = { action: 'Ação', comedy: 'Comédia', thriller: 'Suspense' };
    return (
      <form data-testid="add-movie-form">
        <InputTextForm
          text="Título"
          name="title"
          value={ title }
          onChange={ this.onChange }
        />
        <InputTextForm
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.onChange }
        />
        <InputTextForm
          text="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.onChange }
        />
        <InputTextForm
          text="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.onChange }
        />
        <InputNumberForm
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.onChange }
        />
        <InputSelectForm
          text="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.onChange }
          optionsData={ optionsData }
        />
        <button type="button" onClick={ this.handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

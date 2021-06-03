import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genero from './Genero';
import Input from './Input';
import InputRating from './InputRating';
import Sinopse from './Sinopse';

const initialState = {
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
    this.state = initialState;
    this.clicked = this.clicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clicked = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          type="text"
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <InputRating
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Genero genre={ genre } onChange={ this.handleChange } />
        <Sinopse storyline={ storyline } handleChange={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.clicked }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

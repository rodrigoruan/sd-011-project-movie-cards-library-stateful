import React from 'react';
import propTypes from 'prop-types';
import Input from './InputFile';
import Select from './SelectFile';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
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
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          name="image"
          value={ image }
          onChange={ this.handleChange }
        />
        <Input
          label="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Select label="Gênero" value={ genre } onChange={ this.handleChange } />
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

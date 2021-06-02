import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import SelectGenreInput from './SelectGenreInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
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
          name="title"
          label="Título"
          onChange={ this.handleInputChange }
          value={ title }
        />
        <Input
          name="subtitle"
          label="Subtítulo"
          onChange={ this.handleInputChange }
          value={ subtitle }
        />
        <Input
          name="image"
          label="Imagem"
          onChange={ this.handleInputChange }
          value={ image }
        />
        <Input
          name="storyline"
          type="textarea"
          label="Sinopse"
          onChange={ this.handleInputChange }
          value={ storyline }
        />
        <Input
          name="rating"
          type="number"
          label="Avaliação"
          onChange={ this.handleInputChange }
          value={ rating }
        />
        <SelectGenreInput
          value={ genre }
          onChange={ this.handleInputChange }
        />
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
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

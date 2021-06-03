import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import Select from './Select';
import AddButton from './AddButton';

class AddMovies extends Component {
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
    this.setState({ [name]: value });
  }

  render() {
    const { addMovie } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Label
          title="Título"
          name="title"
          func={ this.handleChange }
          value={ title }
        />
        <Label
          title="Subtitulo"
          name="subtitle"
          func={ this.handleChange }
          value={ subtitle }
        />
        <Label
          title="Imagem"
          name="image"
          func={ this.handleChange }
          value={ imagePath }
        />
        <Label
          title="Sinopse"
          name="storyline"
          func={ this.handleChange }
          value={ storyline }
        />
        <Label
          title="Avaliação"
          name="rating"
          func={ this.handleChange }
          value={ rating }
        />

        <Select handleChange={ this.handleChange } genre={ genre } />
        <AddButton handleClick={ () => addMovie(this.state) } />
      </form>
    );
  }
}

AddMovies.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovies;

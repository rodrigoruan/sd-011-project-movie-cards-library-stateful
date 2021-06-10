import React from 'react';
import PropTypes from 'prop-types';
import GenericFormInput from './GenericFormInput';
import AddMovieGenreSelect from './AddMovieGenreSelect';
import AddMovieTextarea from './AddMovieTextarea';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <GenericFormInput
          type="text"
          name="title"
          value={ title }
          labelText="Título"
          onChange={ this.handleInputChange }
        />
        <GenericFormInput
          type="text"
          name="subtitle"
          value={ subtitle }
          labelText="Subtítulo"
          onChange={ this.handleInputChange }
        />
        <GenericFormInput
          type="text"
          name="image"
          value={ imagePath }
          labelText="Imagem"
          onChange={ this.handleInputChange }
        />
        <AddMovieTextarea value={ storyline } onChange={ this.handleInputChange } />
        <GenericFormInput
          type="number"
          name="rating"
          value={ rating }
          labelText="Avaliação"
          onChange={ this.handleInputChange }
        />
        <AddMovieGenreSelect
          selectedGenre={ genre }
          onChange={ this.handleInputChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

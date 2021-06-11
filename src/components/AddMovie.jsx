import React from 'react';
import PropTypes from 'prop-types';
import GenericFormInput from './GenericFormInput';
import AddMovieGenreSelect from './AddMovieGenreSelect';
import AddMovieTextarea from './AddMovieTextarea';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange({ target }) {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ ...initialState });
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleClick(this.state) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

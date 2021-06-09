import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import GenreInput from './GenreInput';

class AddMovie extends Component {
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

    this.handleChanges = this.handleChanges.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChanges(event) {
    const { target: { name, value } } = event;
    this.setState(
      name === 'rating'
        ? { [name]: parseFloat(value) }
        : { [name]: value },
    );
  }

  submitHandler(callBack) {
    callBack(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { state } = this;
    return (
      <form
        data-testid="add-movie-form"
        className="input-form"
      >
        <InputText
          name="title"
          label="Título"
          inputTestId="title-input"
          labelTestId="title-input-label"
          value={ state.title }
          handler={ this.handleChanges }
          className="inputText"
        />
        <InputText
          name="subtitle"
          label="Subtítulo"
          inputTestId="subtitle-input"
          labelTestId="subtitle-input-label"
          value={ state.subtitle }
          handler={ this.handleChanges }
          className="inputText"
        />
        <InputText
          name="imagePath"
          label="Imagem"
          inputTestId="image-input"
          labelTestId="image-input-label"
          value={ state.imagePath }
          handler={ this.handleChanges }
          className="inputText"
        />
        <InputStoryline value={ state.storyline } handler={ this.handleChanges } />
        <InputRating value={ state.rating } handler={ this.handleChanges } />
        <GenreInput value={ state.genre } handler={ this.handleChanges } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.submitHandler(onClick) }
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

export default AddMovie;

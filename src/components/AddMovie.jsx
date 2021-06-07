import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import GenreSelector from './GenreSelector';

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

  handleChanges(state) {
    const { target: { value } } = e;
    this.setState({ [state]: value });
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
          name="input-title"
          label="Título"
          inputTestId="title-input"
          labelTestId="title-input-label"
          value={ state.title }
          onChange={ this.handleChanges('title') }
          className="inputText"
        />
        <InputText
          name="input-subtitle"
          label="Subtítulo"
          inputTestId="subtitle-input"
          labelTestId="subtitle-input-label"
          value={ state.subtitle }
          onChange={ this.handleChanges('subtitle') }
          className="inputText"
        />
        <InputText
          name="input-img"
          label="Imagem"
          inputTestId="image-input"
          labelTestId="image-input-label"
          value={ state.imagePath }
          onChange={ this.handleChanges('imagePath') }
          className="inputText"
        />
        <InputStoryline
          value={ state.storyline }
          onChange={ this.handleChanges('storyline') }
        />
        <InputRating value={ state.rating } onChange={ this.handleChanges('rating') } />
        <GenreSelector value={ state.genre } onChange={ this.handleChanges('rating') } />
        <button type="submit" data-testid="send-button" onClick={ this.submitHandler(onClick) }>
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

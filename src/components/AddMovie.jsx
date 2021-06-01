import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelSelect from './LabelSelect';
import LabelText from './LabelText';
import LabelRating from './LabelRating';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = inicialState;
    this.handleState = this.handleState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleState({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  clearState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(inicialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelText
          idInput="title-input"
          inputValue={ title }
          inputName="title"
          handleState={ this.handleState }
          textValue="Título"
          labelD="title-input-label"
        />
        <LabelText
          idInput="subtitle-input"
          inputValue={ subtitle }
          inputName="subtitle"
          handleState={ this.handleState }
          textValue="Subtítulo"
          labelD="subtitle-input-label"
        />
        <LabelText
          idInput="image-input"
          inputValue={ imagePath }
          inputName="imagePath"
          handleState={ this.handleState }
          textValue="Imagem"
          labelD="image-input-label"
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            value={ storyline }
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            onChange={ this.handleState }
          />
        </label>
        <LabelRating rating={ rating } handleState={ this.handleState } />
        <LabelSelect genre={ genre } handleState={ this.handleState } />
        <button data-testid="send-button" onClick={ this.clearState } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

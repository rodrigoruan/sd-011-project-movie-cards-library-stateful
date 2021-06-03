import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Block from './Block';
import Select from './Select';

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
    this.handleClick = this.handleClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Block
          type="input"
          name="title"
          title="Título"
          change={ this.changeState }
          value={ title }
        />
        <Block
          type="input"
          name="subtitle"
          title="Subtítulo"
          change={ this.changeState }
          value={ subtitle }
        />
        <Block
          type="input"
          name="imagePath"
          title="Imagem"
          change={ this.changeState }
          value={ imagePath }
        />
        <Block
          type="textarea"
          name="storyline"
          title="Sinopse"
          change={ this.changeState }
          value={ storyline }
        />
        <Block
          type="input"
          name="rating"
          title="Avaliação"
          change={ this.changeState }
          value={ rating }
        />
        <Select change={ this.changeState } value={ genre } />
        <button type="button" onClick={ this.handleClick } data-testid="send-button">
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

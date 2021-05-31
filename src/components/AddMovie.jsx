import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { Select } from './Select';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export class AddMovie extends Component {
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
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Label
          name="title"
          title="Título"
          change={ this.changeState }
          value={ title }
        />
        <Label
          name="subtitle"
          title="Subtítulo"
          change={ this.changeState }
          value={ subtitle }
        />
        <Label
          name="imagePath"
          title="Imagem"
          change={ this.changeState }
          value={ imagePath }
        />
        <Label
          name="storyline"
          title="Sinopse"
          change={ this.changeState }
          value={ storyline }
        />
        <Label
          name="rating"
          title="Avaliação"
          change={ this.changeState }
          value={ rating }
        />
        <Select genre={ genre } changeState={ this.changeState } />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
        ;
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

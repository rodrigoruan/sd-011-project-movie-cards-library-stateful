import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Genero from './Genero';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleElements = this.handleElements.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = initialState;
  }

  handleElements({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text1">
          Título
          <input
            data-testid="title-input"
            id="text1"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleElements }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="text2">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="text2"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleElements }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="text3">
          Imagem
          <input
            data-testid="image-input"
            id="text3"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleElements }
          />
        </label>
        <Genero genre={ genre } handleElements={ this.handleElements } />
        <Avaliacao rating={ rating } handleElements={ this.handleElements } />
        <Sinopse storyLine={ storyLine } handleElements={ this.handleElements } />
        <Button onClick={ onClick } resetState={ this.resetState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

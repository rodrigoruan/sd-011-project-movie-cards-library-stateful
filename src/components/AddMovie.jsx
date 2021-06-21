import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Genre from './Genre';
import Sinopse from './Sinopse';
import Rating from './Avaliacao';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subTitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
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
    const { title, subTitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="textOne">
          Título
          <input
            data-testid="title-input"
            id="textOne"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="textTwo">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="textTwo"
            type="text"
            name="subtitle"
            value={ subTitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="textThree">
          Imagem
          <input
            data-testid="image-input"
            id="textThree"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
        <Sinopse storyLine={ storyLine } handleChange={ this.handleChange } />
        <Button onClick={ onClick } resetState={ this.resetState } />
      </form>
    );
  }
}

export default AddMovie;
AddMovie.propTypes = {
  onClick: PropTypes.func,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.activeClick = this.activeClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  activeClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } changeState={ this.changeState } />
        <SubTitle value={ subtitle } changeState={ this.changeState } />
        <ImagePath value={ imagePath } changeState={ this.changeState } />
        <Storyline value={ storyline } changeState={ this.changeState } />
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            onChange={ this.changeState }
            name="rating"
            value={ rating }
            data-testid="rating-input"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            onChange={ this.changeState }
            name="genre"
            value={ genre }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.activeClick }
          data-testid="send-button"
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

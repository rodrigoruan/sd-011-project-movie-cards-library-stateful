import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import ImagePath from './ImagePath';
import RatingComponent from './RatingComponent';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

class addMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 1,
      genre: 'action',
    };
    this.submitClick = this.submitClick.bind(this);
    this.changeState = this.changeState.bind(this);
    this.firstState = this.state;
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  submitClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.firstState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.changeState } />
        <Subtitle value={ subtitle } onChange={ this.changeState } />
        <ImagePath value={ imagePath } onChange={ this.changeState } />
        <Storyline value={ storyline } onChange={ this.changeState } />
        <RatingComponent value={ rating } onChange={ this.changeState } />
        <Genre value={ genre } onChange={ this.changeState } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.submitClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

// eslint-disable-next-line react/no-typos
addMovie.proptypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;

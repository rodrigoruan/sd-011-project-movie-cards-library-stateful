import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCardGenre from './MovieCardGenre';
import MovieCardImage from './MovieCardImage';
import MovieCardRating from './MovieCardRating';
import MovieCardSinopse from './MovieCardSinopse';
import MovieCardSubtitle from './MovieCardSubtitle';
import MovieCardTitle from './MovieCardTitle';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      raiting: 0,
      genre: 'action',
    };

    this.handleEvents = this.handleEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEvents({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, raiting, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieCardTitle value={ title } handleEvents={ this.handleEvents } />
        <MovieCardSubtitle value={ subtitle } handleEvents={ this.handleEvents } />
        <MovieCardImage value={ imagePath } handleEvents={ this.handleEvents } />
        <MovieCardSinopse value={ storyline } handleEvents={ this.handleEvents } />
        <MovieCardRating value={ raiting } handleEvents={ this.handleEvents } />
        <MovieCardGenre value={ genre } handleEvents={ this.handleEvents } />
        <button
          name="button"
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
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

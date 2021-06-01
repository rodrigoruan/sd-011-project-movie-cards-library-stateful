import React, { Component } from 'react';
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
    };

    this.handleEvents = this.handleEvents.bind(this);
  }

  handleEvents({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <MovieCardTitle handleEvents={ this.handleEvents } />
        <MovieCardSubtitle handleEvents={ this.handleEvents } />
        <MovieCardImage handleEvents={ this.handleEvents } />
        <MovieCardSinopse handleEvents={ this.handleEvents } />
        <MovieCardRating handleEvents={ this.handleEvents } />
        <MovieCardGenre handleEvents={ this.handleEvents } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleEvents }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

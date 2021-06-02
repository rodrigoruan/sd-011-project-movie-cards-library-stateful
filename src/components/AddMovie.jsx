import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesInputText from './MoviesInputText';
import MoviesInputOthers from './MoviesInputOthers';

const INITIAL_STATE = {
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

    this.state = INITIAL_STATE;
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerIncludeMovie = this.handlerIncludeMovie.bind(this);
  }

  handlerChange({ target }) {
    const { value, name } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  handlerIncludeMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <MoviesInputText
            titleValue={ title }
            subtitleValue={ subtitle }
            imageValue={ imagePath }
            onchange={ this.handlerChange }
          />
          <MoviesInputOthers
            storylineValue={ storyline }
            ratingValue={ rating }
            genreValue={ genre }
            onchange={ this.handlerChange }
          />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handlerIncludeMovie }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

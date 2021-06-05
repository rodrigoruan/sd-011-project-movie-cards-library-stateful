/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImagePathForm from './ImagePathForm';
import StorylineForm from './StorylineForm';
import RatingForm from './RatingForm';
import GenreForm from './GenreForm';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonHandler() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  // prettier-ignore
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleForm title={ title } onChangeHandler={ this.onChangeHandler } />
        <SubtitleForm subtitle={ subtitle } onChangeHandler={ this.onChangeHandler } />
        <ImagePathForm imagePath={ imagePath } onChangeHandler={ this.onChangeHandler } />
        <StorylineForm storyline={ storyline } onChangeHandler={ this.onChangeHandler } />
        <RatingForm
          rating={ parseFloat(rating) }
          onChangeHandler={ this.onChangeHandler }
        />
        <GenreForm genre={ genre } onChangeHandler={ this.onChangeHandler } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.buttonHandler }
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

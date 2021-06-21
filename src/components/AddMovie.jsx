import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import Genre from './Genre';
import Rating from './Rating';

class AddMovie extends Component {
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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryLine = this.handleChangeStoryLine.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.AddMovieButton = this.AddMovieButton.bind(this);
  }

  handleChangeTitle({ target }) {
    this.setState({ title: target.value });
  }

  handleChangeSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  handleChangeImagePath({ target }) {
    this.setState({ imagePath: target.value });
  }

  handleChangeStoryLine({ target }) {
    this.setState({ storyline: target.value });
  }

  handleChangeRating({ target }) {
    this.setState({ rating: target.value });
  }

  handleChangeGenre({ target }) {
    this.setState({ genre: target.value });
  }

  AddMovieButton() {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChangeTitle={ this.handleChangeTitle } title={ title } />
        <Subtitle
          handleChangeSubtitle={ this.handleChangeSubtitle }
          subtitle={ subtitle }
        />
        <ImagePath
          handleChangeImagePath={ this.handleChangeImagePath }
          imagePath={ imagePath }
        />
        <StoryLine
          handleChangeStoryLine={ this.handleChangeStoryLine }
          storyline={ storyline }
        />
        <Rating
          handleChangeRating={ this.handleChangeRating }
          rating={ rating }
        />
        <Genre handleChangeGenre={ this.handleChangeGenre } genre={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.AddMovieButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: PropTypes.func,
};

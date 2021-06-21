import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import ImagePath from './AddMovie/ImagePath';
import Genre from './AddMovie/Genre';
import Rating from './AddMovie/Rating';
import StoryLine from './AddMovie/StoryLine';
import Button from './AddMovie/Button';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      image,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onTitleTextChange={ this.handleChange }
        />

        <Subtitle
          subtitle={ subtitle }
          onSubtitleTextChange={ this.handleChange }
        />

        <ImagePath
          image={ image }
          onImageTextChange={ this.handleChange }
        />

        <StoryLine
          story={ storyline }
          onStoryTextChange={ this.handleChange }
        />

        <Rating
          rating={ rating }
          onRatingNumberChange={ this.handleChange }
        />

        <Genre
          genre={ genre }
          onGenreChange={ this.handleChange }
        />
        <Button
          handleClick={ () => this.handleClick(onClick) }
        />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

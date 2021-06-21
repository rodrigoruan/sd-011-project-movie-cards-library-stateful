 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './AddMovie/Button';
import Genre from './AddMovie/Genre';
import ImagePath from './AddMovie/ImagePath';
import Rating from './AddMovie/Rating';
import StoryLine from './AddMovie/StoryLine';
import Subtitle from './AddMovie/Subtitle';
import Title from './AddMovie/Title';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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
          image={ imagePath }
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

        <Button onButtonClick={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieRating from './AddMovieRating';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieSelect from './AddMovieSelect';
import AddMovieButton from './AddMovieButton';

const defaultState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = defaultState;
  }

  onTitleChange = (event) => {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  onSubtitleChange = (event) => {
    const newSubtitle = event.target.value;
    this.setState({ subtitle: newSubtitle });
  }

  onImageChange = (event) => {
    const newImage = event.target.value;
    this.setState({ imagePath: newImage });
  }

  onStorylineChange = (event) => {
    const newStoryline = event.target.value;
    this.setState({ storyline: newStoryline });
  }

  onRatingChange = (event) => {
    const newRating = event.target.value;
    this.setState({ rating: newRating });
  }

  onSelectChange = (event) => {
    const newGenre = event.target.value;
    this.setState({ genre: newGenre });
  }

  onButtonClick = (event) => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(defaultState);
  }

  render() {
    const {
      title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle value={ title } onChange={ this.onTitleChange } />
        <AddMovieSubtitle value={ subtitle } onChange={ this.onSubtitleChange } />
        <AddMovieImage value={ imagePath } onChange={ this.onImageChange } />
        <AddMovieStoryline value={ storyline } onChange={ this.onStorylineChange } />
        <AddMovieRating value={ rating } onChange={ this.onRatingChange } />
        <AddMovieSelect value={ genre } onChange={ this.onSelectChange } />
        <AddMovieButton onClick={ this.onButtonClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './AddMoviesFomrsInputs/TitleInput';
import SubtitleInput from './AddMoviesFomrsInputs/SubtitleInput';
import ImageInput from './AddMoviesFomrsInputs/ImageInput';
import StoryLineInput from './AddMoviesFomrsInputs/StoryLineInput';
import RatingInput from './AddMoviesFomrsInputs/RatingInput';
import GenreInput from './AddMoviesFomrsInputs/GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setFilms = this.setFilms.bind(this);
    this.chosenMovie = this.chosenMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  setFilms() {
    const { onClick } = this.props;

    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  chosenMovie({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'rating') value = Number(value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput chosenMovie={ this.chosenMovie } title={ title } />
        <SubtitleInput chosenMovie={ this.chosenMovie } subtitle={ subtitle } />
        <ImageInput chosenMovie={ this.chosenMovie } imagePath={ imagePath } />
        <StoryLineInput chosenMovie={ this.chosenMovie } storyline={ storyline } />
        <RatingInput chosenMovie={ this.chosenMovie } rating={ rating } />
        <GenreInput chosenMovie={ this.chosenMovie } genre={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.setFilms }
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

export default AddMovie;

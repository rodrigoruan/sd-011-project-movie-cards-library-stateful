import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './AddMovieInputs/TitleInput';
import SubtitleInput from './AddMovieInputs/SubtitleInput';
import ImageInput from './AddMovieInputs/ImageInput';
import StorylineTextarea from './AddMovieInputs/StorylineTextarea';
import RatingInput from './AddMovieInputs/RatingInput';
import GenreInput from './AddMovieInputs/GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    if (/^\d+$/.test(value)) {
      this.setState({
        [target.id]: parseInt(value, 10),
      });
    } else {
      this.setState({
        [target.id]: value,
      });
    }
  }

  createMovie(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput title={ title } handleChange={ this.handleChange } />
          <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
          <StorylineTextarea storyline={ storyline } handleChange={ this.handleChange } />
          <RatingInput rating={ rating } handleChange={ this.handleChange } />
          <GenreInput genre={ genre } handleChange={ this.handleChange } />
          <button
            type="button"
            onClick={ () => this.createMovie(onClick) }
            data-testid="send-button"
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

export default AddMovie;

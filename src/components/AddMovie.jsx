import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
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

    this.textInputTitle = this.textInputTitle.bind(this);
    this.textInputSubtitle = this.textInputSubtitle.bind(this);
    this.imagePathAdd = this.imagePathAdd.bind(this);
    this.textAreaInput = this.textAreaInput.bind(this);
    this.textRating = this.textRating.bind(this);
    this.buttonAddMovie = this.buttonAddMovie.bind(this);
  }

  textInputTitle({ target }) {
    this.textInputTitle({ title: target.value });
  }

  textInputSubtitle({ target }) {
    this.textInputSubtitle({ subtitle: target.value });
  }

  imagePathAdd({ target }) {
    this.imagePathAdd({ imagePath: target.value });
  }

  textAreaInput({ target }) {
    this.textAreaInput({ storyline: target.value });
  }

  textRating({ target }) {
    this.textRating({ rating: target.value });
  }

  buttonAddMovie() {
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { onClick }
          <TitleInput funcValue={ this.textInputTitle } stateValue={ title } />
          <SubtitleInput funcValue={ this.textInputSubtitle } stateValue={ subtitle } />
          <ImageInput funcValue={ this.imagePathAdd } stateValue={ imagePath } />
          <StorylineInput funcValue={ this.textAreaInput } stateValue={ storyline } />
          <RatingInput funcValue={ this.textRating } stateValue={ rating } />
          <button type="button" data-testid="send-button" onClick={ this.buttonAddMovie }>
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

import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import SelectInputText from './SelectInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

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
    this.selectGenre = this.selectGenre.bind(this);
    this.buttonAddMovie = this.buttonAddMovie.bind(this);
  }

  textInputTitle({ target }) {
    this.setState({ title: target.value });
  }

  textInputSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  imagePathAdd({ target }) {
    this.setState({ imagePath: target.value });
  }

  textAreaInput({ target }) {
    this.setState({ storyline: target.value });
  }

  textRating({ target }) {
    this.setState({ rating: target.value });
  }

  selectGenre({ target }) {
    this.setState({ genre: target.value });
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput funcValue={ this.textInputTitle } stateValue={ title } />
          <SubtitleInput funcValue={ this.textInputSubtitle } stateValue={ subtitle } />
          <ImageInput funcValue={ this.imagePathAdd } stateValue={ imagePath } />
          <StorylineInput funcValue={ this.textAreaInput } stateValue={ storyline } />
          <RatingInput funcValue={ this.textRating } stateValue={ rating } />
          <SelectInputText funcValue={ this.selectGenre } stateValue={ genre } />
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

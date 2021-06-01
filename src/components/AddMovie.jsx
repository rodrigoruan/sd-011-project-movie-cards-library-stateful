// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import GenreInput from './GenreInput';
import ImageInput from './ImageInput';
import RatingInput from './RatingInput';
import StoryLineInput from './StoryLineInput';
import SubtitleInput from './SubtitleInput';
import TitleInput from './TitleInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <SubtitleInput handleChange={ this.handleChange } subtitle={ subtitle } />
        <StoryLineInput handleChange={ this.handleChange } storyline={ storyline } />
        <RatingInput handleChange={ this.handleChange } rating={ rating } />
        <ImageInput handleChange={ this.handleChange } imagePath={ imagePath } />
        <GenreInput handleChange={ this.handleChange } genre={ genre } />
        <TitleInput handleChange={ this.handleChange } title={ title } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ () => {
            onClick(this.state);
            this.reset();
          } }
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
// Ficou meio nublado este requisito do button, dps dar uma estudada neste requisito

export default AddMovie;

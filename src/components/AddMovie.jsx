import React from 'react';
import PropTypes from 'prop-types';
import GenreInput from './GenreInput';
import ImageInput from './ImageInput';
import RatingInput from './RatingInput';
import StoryLine from './StoryLine';
import SubtitleInput from './SubtitleInput';
import TitleInput from './TitleInput';

export default class AddMovie extends React.Component {
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
    const { name, value } = target;
    if (name === 'image') {
      this.setState({
        imagePath: value,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine value={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <GenreInput genre={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleSubmit }
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePath from './ImagePath';
import RatingInput from './RatingInput';
import StoryLineInput from './StoryLineInput';
import GenreInput from './GenreInput';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',

    };
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (

      <form data-testid="add-movie-form">

        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <StoryLineInput value={ storyLine } handleChange={ this.handleChange } />
        <RatingInput value={ rating } handleChange={ this.handleChange } />
        <GenreInput value={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.initialState }
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

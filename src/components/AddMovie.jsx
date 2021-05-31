import React, { Component } from 'react';
import Title from './CreateTitleInput';
import Subtitle from './CreateSubtitleInput';
import Image from './CreateImageInput';
import Storyline from './CreateStoryLine';
import Rating from './CreateRating';
import Genre from './CreateGenre';

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
      element: [],
    };
    this.initialState = { ...this.state };
    this.modifyState = this.modifyState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleAddInfo(ev) {
    ev.preventDefault();
    this.resetState();
  }

  resetState() {
    this.setState(() => this.initialState);
  }

  modifyState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } callback={ this.modifyState } />
          <Subtitle subtitle={ subtitle } callback={ this.modifyState } />
          <Image imagePath={ imagePath } callback={ this.modifyState } />
          <Storyline storyLine={ storyLine } callback={ this.modifyState } />
          <Rating rating={ rating } callback={ this.modifyState } />
          <Genre genre={ genre } callback={ this.modifyState } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleAddInfo }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

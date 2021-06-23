import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import ImagePath from './ImagePath';
import Storyline from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Title';
import Rating from './Rating';
import SendButton from './SendButton';

class AddMovie extends Component {
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
    this.SendButtonFunc = this.SendButtonFunc.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  SendButtonFunc(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } stateChange={ this.handleChange } />
        <Genre genre={ genre } stateChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } stateChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } stateChange={ this.handleChange } />
        <Storyline storyline={ storyline } stateChange={ this.handleChange } />
        <Rating rating={ rating } stateChange={ this.handleChange } />
        <SendButton SendButtonFunc={ this.SendButtonFunc } />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// https://pt-br.reactjs.org/docs/dom-elements.html
// https://forum.betrybe.com/t/projeto-movie-cards-library-stateful-requisito-14/879

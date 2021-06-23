import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import ImagePath from './ImagePath';
import Storyline from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Title';
import Rating from './Rating';

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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } stateChange={ this.handleChange } />
        <Genre genre={ genre } stateChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } stateChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } stateChange={ this.handleChange } />
        <Storyline storyline={ storyline } stateChange={ this.handleChange } />
        <Rating rating={ rating } stateChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// https://pt-br.reactjs.org/docs/dom-elements.html

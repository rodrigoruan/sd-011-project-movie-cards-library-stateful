// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Genre from './Genre';
import ImagePath from './ImagePath';
import RatingForm from './RatingForm';
import Subtitle from './Subtitle';
import TextArea from './TextArea';
import Title from './Title';
import Button from './Button';

export default class AddMovie extends Component {
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
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleClearState = this.handleClearState.bind(this);
  }

  handleAddMovie({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClearState(e) {
    e.preventDefault();
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
      <form data-testid="add-movie-form">
        <Title title={ title } handleAddMovie={ this.handleAddMovie } />
        <Subtitle subtitle={ subtitle } handleAddMovie={ this.handleAddMovie } />
        <ImagePath imagePath={ imagePath } handleAddMovie={ this.handleAddMovie } />
        <TextArea storyline={ storyline } handleAddMovie={ this.handleAddMovie } />
        <RatingForm rating={ rating } handleAddMovie={ this.handleAddMovie } />
        <Genre genre={ genre } handleAddMovie={ this.handleAddMovie } />
        <Button handleClearState={ this.handleClearState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

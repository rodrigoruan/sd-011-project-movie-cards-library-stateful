import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Inputs/Title';
import Subtitle from './Inputs/Subtitle';
import Image from './Inputs/Image';
import StoryLine from './Inputs/Storyline';
import AddRating from './Inputs/RatingAdd';
import Genre from './Inputs/Genre';
import AddButton from './Inputs/ButtonAdd';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleFunction = this.handleFunction.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleFunction({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  newMovie() {
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
        <Title title={ title } handleFunction={ this.handleFunction } />
        <Subtitle subtitle={ subtitle } handleFunction={ this.handleFunction } />
        <Image imagePath={ imagePath } handleFunction={ this.handleFunction } />
        <StoryLine storyline={ storyline } handleFunction={ this.handleFunction } />
        <AddRating rating={ rating } handleFunction={ this.handleFunction } />
        <Genre genre={ genre } handleFunction={ this.handleFunction } />
        <AddButton newMovie={ this.newMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

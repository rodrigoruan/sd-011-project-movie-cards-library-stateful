import React, { Component } from 'react';
import { func, shape, string, number, oneOfType } from 'prop-types';
import Genre from './AddMovieInputs/Genre';
import Subtitle from './AddMovieInputs/Subtitle';
import Title from './AddMovieInputs/Title';
import Storyline from './AddMovieInputs/Storyline';
import ImagePath from './AddMovieInputs/ImagePath';
import Rating from './AddMovieInputs/Rating';

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
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  }

  handleOnClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleInputChange={ this.handleInputChange } />
        <Subtitle subtitle={ subtitle } handleInputChange={ this.handleInputChange } />
        <ImagePath imagePath={ imagePath } handleInputChange={ this.handleInputChange } />
        <Storyline storyline={ storyline } handleInputChange={ this.handleInputChange } />
        <Rating rating={ rating } handleInputChange={ this.handleInputChange } />
        <Genre genre={ genre } handleInputChange={ this.handleInputChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleOnClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
  handleChange: func,
  handleClick: func,
  value: shape({
    storyline: string,
    genre: string,
    rating: oneOfType([
      string, number,
    ]),
  }),
}.isRequired;

export default AddMovie;

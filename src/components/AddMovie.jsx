import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTitle from './AddMovieTitle';
import MovieSubtitle from './AddMovieSubtitle';
import MovieImagePath from './AddMovieImagePath';
import MovieStoryline from './AddMovieStoryline';
import MovieRating from './AddMovieRating';
import MovieGenre from './AddMovieGenre';

class AddMovie extends Component {
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
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
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
      <div>
        <form data-testid="add-movie-form">
          <MovieTitle value={ title } handleInputs={ this.handleInputs } />
          <MovieSubtitle value={ subtitle } handleInputs={ this.handleInputs } />
          <MovieImagePath value={ imagePath } handleInputs={ this.handleInputs } />
          <MovieStoryline value={ storyline } handleInputs={ this.handleInputs } />
          <MovieRating value={ rating } handleInputs={ this.handleInputs } />
          <MovieGenre value={ genre } handleInputs={ this.handleInputs } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.handleSubmit }
          >
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

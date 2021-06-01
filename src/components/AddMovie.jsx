import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddImage from './AddImage';
import AddMovieBtn from './AddMovieBtn';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';
import AddStoryline from './AddStoryline';
import GenreSelector from './GenreSelector';
import RatingInput from './RatingInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChanges(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.setState(() => this.initialState);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddMovieTitle handleChanges={ this.handleChanges } title={ title } />
          <AddMovieSubtitle handleChanges={ this.handleChanges } subtitle={ subtitle } />
          <AddImage handleChanges={ this.handleChanges } imagePath={ imagePath } />
          <AddStoryline handleChanges={ this.handleChanges } storyline={ storyline } />
          <RatingInput handleChanges={ this.handleChanges } rating={ rating } />
          <GenreSelector handleChanges={ this.handleChanges } genre={ genre } />
          <AddMovieBtn onClick={ onClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

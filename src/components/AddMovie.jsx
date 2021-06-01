// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieButton';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieGenreSelect from './AddMovieGenreSelect';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieTitle from './AddMovieTitle';

class AddMovie extends React.Component {
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
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    onClick({ title, subtitle, storyline, imagePath, rating, genre });
    this.setState(this.initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, genre, storyline, imagePath, rating } = this.state;
    return (
      <form method={ onClick } data-testid="add-movie-form">
        <AddMovieTitle event={ this.changeHandler } valueR={ title } />
        <AddMovieSubtitle event={ this.changeHandler } valueR={ subtitle } />
        <AddMovieImage event={ this.changeHandler } valueR={ imagePath } />
        <AddMovieStoryline event={ this.changeHandler } valueR={ storyline } />
        <AddMovieRating event={ this.changeHandler } valueR={ rating } />
        <AddMovieGenreSelect event={ this.changeHandler } valueR={ genre } />
        <AddMovieButton addOnClick={ this.submit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

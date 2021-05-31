import React from 'react';
import TitleInput from './AddMoviesFomrsInputs/TitleInput';
import SubtitleInput from './AddMoviesFomrsInputs/SubtitleInput';
import ImageInput from './AddMoviesFomrsInputs/ImageInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.chosenMovie = this.chosenMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  chosenMovie({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'rating') value = Number(value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput chosenMovie={ this.chosenMovie } title={ title } />
        <SubtitleInput chosenMovie={ this.chosenMovie } subtitle={ subtitle } />
        <ImageInput chosenMovie={ this.chosenMovie } imagePath={ imagePath } />
      </form>
    );
  }
}

export default AddMovie;

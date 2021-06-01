// implement AddMovie component here
import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './InputImage';
import Storyline from './Storyline';
import Rating from './LabelRating';
import Genre from './SelectGenre';
import PropTypes from 'prop-types'

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.addMyMovies = this.addMyMovies.bind(this)
  }

  addMyMovies({target}) {
    const { name, value } = target;
    this.setState({
      [ name ]: value,
    })
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre} = this.state
    return (
    <form data-testid="add-movie-form">
      <Title title={ title } addMyMovies={ this.addMyMovies }/>
      <Subtitle subtitle={subtitle} addMyMovies={this.addMyMovies }/>
      <Image imagePath={ imagePath } addMyMovies={this.addMyMovies }/>
      <Storyline storyline={ storyline} addMyMovies={this.addMyMovies }/>
      <Rating rating={ rating } addMyMovies={this.addMyMovies }/>
      <Genre genre={ genre } addMyMovies={this.addMyMovies }/> 

      {/* <button data-testid="send-button" onClick={ this.addMyMovies }>Adicionar filme</button> */}

    </form>
    )
  }
}

// AddMovie.propType = {
//   onclick: Proptypes.func,
// }

export default AddMovie;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMoviesComp/Title';
import Subtitle from './AddMoviesComp/Subtitle';
import Imagepath from './AddMoviesComp/Imagepath';
import Storyline from './AddMoviesComp/Storyline';
import Rating from './AddMoviesComp/Rating';
import Genre from './AddMoviesComp/Genre';

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

    this.handleChange = this.handleChange.bind(this);

    this.sendSubmit = this.sendSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendSubmit() {
    console.log('oi');
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } handleChange={ this.handleChange } />

          <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />

          <Imagepath imagePath={ imagePath } handleChange={ this.handleChange } />

          <Storyline storyline={ storyline } handleChange={ this.handleChange } />

          <Rating rating={ rating } handleChange={ this.handleChange } />

          <Genre genre={ genre } handleChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.sendSubmit }
          >
            Adicionar filme
          </button>
        </form>
      </div>

    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

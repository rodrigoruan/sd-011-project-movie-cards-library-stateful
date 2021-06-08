import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingChange from './RatingChange';
import Genre from './Genre';
import Button from './Button';

const data = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: '',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = data;
    // O Bruno Duarte me ajudou

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(data);
  }

  // Pedi ajuda na sala "A"
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre, button } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />
        <RatingChange rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <Button button={ button } onClick={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

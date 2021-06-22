import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Button from './Button';
import Genre from './Genre';
import Sinopse from './Sinopse';
import Rating from './Rating';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = initialState;
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.onChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.onChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.onChange } />
        <Genre genre={ genre } onChange={ this.onChange } />
        <Rating rating={ rating } onChange={ this.onChange } />
        <Sinopse storyline={ storyline } onChange={ this.onChange } />
        <Button onClick={ onClick } resetState={ this.resetState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

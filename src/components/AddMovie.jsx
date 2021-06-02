import React from 'react';
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const genre = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // Pedi ajuda na sala "A"
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre, button } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <RatingChange rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <Button value={ button } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

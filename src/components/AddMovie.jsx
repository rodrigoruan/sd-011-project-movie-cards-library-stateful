import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import RatingChange from './RatingChange';

const data = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = data;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // Pedi ajuda na sala "A"
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <RatingChange rating={ rating } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

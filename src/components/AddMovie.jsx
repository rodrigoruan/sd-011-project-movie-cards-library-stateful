import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };

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
    const { title, subtitle, imagePath, storyline, ratingChange } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ this.state.title } handleChange={ this.handleChange } />
        <Subtitle value={ this.state.subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ this.state.imagePath } handleChange={ this.handleChange } />
        <Storyline value={ this.state.storyline } handleChange={ this.handleChange } />
        <RatingChange value={ this.state.ratingChange } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

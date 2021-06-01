// implement AddMovie component here
import React from 'react';
import Title from './TitleComponent';
import Subtitle from './SubtitleComponent';
import Image from './ImageComponent';
import TextArea from './TextAreaComponent';
import Rating from './RatingComponent';
import Select from './SelectComponent';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <TextArea value={ storyline } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Select value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

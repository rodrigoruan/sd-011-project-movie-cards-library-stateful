// implement AddMovie component here
import React, { Component } from 'react'
import ImagePath from './ImagePath';
import Subtitle from './Subtitle';
import TextArea from './TextArea';
import Title from './Title';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleAddMovie={ this.handleAddMovie } />
        <Subtitle subtitle={ subtitle } handleAddMovie={ this.handleAddMovie } />
        <ImagePath imagePath={ imagePath } handleAddMovie={ this.handleAddMovie } />
        <TextArea storyline={ storyline } handleAddMovie={ this.handleAddMovie } />
      </form>
    );
  }
}

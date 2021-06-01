// implement AddMovie component here
import React from 'react';
import LabelImagePath from './LabelImagePath';
import LabelRating from './LabelRating';
import LabelStoryLine from './LabelStoryline';
import LabelSubtitle from './LabelSubtitle';
import LabelTitle from './LabelTitle';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle change={ this.handleChange } value={ title } />
        <LabelSubtitle change={ this.handleChange } value={ subtitle } />
        <LabelImagePath change={ this.handleChange } value={ imagePath } />
        <LabelStoryLine change={ this.handleChange } value={ storyline } />
        <LabelRating change={ this.handleChange } value={ rating } />
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import Avaliation from './Avaliation';
import Genre from './Genre';
import Image from './Image';
import QueryButton from './QueryButton';
import StoryLine from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.inputRead = this.inputRead.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputRead(event) {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating,
      genre } = this.state;
    return (
      <form className="add-movie" data-testid="add-movie-form">
        <Title
          inputRead={ this.inputRead }
          value={ title }
        />
        <Subtitle
          inputRead={ this.inputRead }
          value={ subtitle }
        />
        <Image
          inputRead={ this.inputRead }
          value={ imagePath }
        />
        <StoryLine
          inputRead={ this.inputRead }
          value={ storyLine }
        />
        <Avaliation
          inputRead={ this.inputRead }
          value={ rating }
        />
        <Genre
          inputRead={ this.inputRead }
          value={ genre }
        />
        <QueryButton
          onClick={ this.onClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

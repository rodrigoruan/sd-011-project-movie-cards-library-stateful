import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import RatingFormItem from './RatingFormItem';
import StoryLine from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Titulo';
import MovieGenre from './MovieGenre';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.reset = this.reset.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handlerChange={ this.handlerChange } />
        <Subtitle value={ subtitle } handlerChange={ this.handlerChange } />
        <Image value={ imagePath } handlerChange={ this.handlerChange } />
        <StoryLine value={ storyline } handlerChange={ this.handlerChange } />
        <RatingFormItem value={ rating } handlerChange={ this.handlerChange } />
        <MovieGenre value={ genre } handlerChange={ this.handlerChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.reset();
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;

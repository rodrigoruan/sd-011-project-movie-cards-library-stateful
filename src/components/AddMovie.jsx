import React from 'react';
import PropTypes from 'prop-types';
import Assessment from './Assessment';
// import Button from './Button';
import Genre from './Genre';
import Imagem from './Imagem';
import StoryLine from './StoryLine';
import SubtitleCard from './SubtitleCard';
import TittleCard from './TittleCard';

// import Data from '../data';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChange(event) {
    // console.log('test handler', event)
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handlerClick() {
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

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TittleCard handlerChange={ this.handlerChange } value={ title } />
        <SubtitleCard handlerChange={ this.handlerChange } value={ subtitle } />
        <Imagem handlerChange={ this.handlerChange } value={ imagePath } />
        <StoryLine handlerChange={ this.handlerChange } value={ storyLine } />
        <Assessment handlerChange={ this.handlerChange } value={ rating } />
        <Genre handlerChange={ this.handlerChange } value={ genre } />
        {/* <Button onClick={this.handlerClick} /> */}
        <button
          name="button"
          type="button"
          data-testid="send-button"
          onClick={ this.handlerClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

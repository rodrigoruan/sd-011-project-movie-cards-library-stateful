import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubTitleInput from './SubTitleInput';
import ImagePath from './ImagePath';
import TextareaField from './TextareaField';
import RatingInput from './RatingInput';
import GenreCheck from './GenreCheck';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleState = this.handleState.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }

  // atribui valor do input
  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Requisito 14
  resetBtn() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput
          title={ title }
          handleState={ this.handleState }
        />
        <SubTitleInput
          subtitle={ subtitle }
          handleState={ this.handleState }
        />
        <ImagePath
          imagePath={ imagePath }
          handleState={ this.handleState }
        />
        <TextareaField
          storyline={ storyline }
          handleState={ this.handleState }
        />
        <RatingInput
          rating={ rating }
          handleState={ this.handleState }
        />
        <GenreCheck
          genre={ genre }
          handleState={ this.handleState }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetBtn }
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
};

AddMovie.defaultProps = {
  onClick: () => { },
};

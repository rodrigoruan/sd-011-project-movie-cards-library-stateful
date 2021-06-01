import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
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
  handleState(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Requisito 14
  resetBtn(event) {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
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
          value={ title }
          handleState={ this.handleState }
        />
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleState }
          />
        </label>
        <ImagePath
          value={ imagePath }
          handleState={ this.handleState }
        />
        <TextareaField
          value={ storyline }
          handleState={ this.handleState }
        />
        <RatingInput
          value={ rating }
          handleState={ this.handleState }
        />
        <GenreCheck
          handleState={ this.handleState }
          value={ genre }
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

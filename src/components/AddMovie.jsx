import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelImage from './LabelImage';
import LabelRating from './LabelRating';
import LabelStoryline from './LabelStoryline';
import LabelSubtitle from './LabelSubtitle';
import LabelTitle from './LabelTitle';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleButtonMovie = this.handleButtonMovie.bind(this);
    this.handleStates = this.handleStates.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleStates({ target }) {
    console.log(target);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButtonMovie() {
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
        <LabelTitle title={ title } handleStates={ this.handleStates } />

        <LabelSubtitle subtitle={ subtitle } handleStates={ this.handleStates } />

        <LabelImage imagePath={ imagePath } handleStates={ this.handleStates } />

        <LabelStoryline storyline={ storyline } handleStates={ this.handleStates } />

        <LabelRating rating={ rating } handleStates={ this.handleStates } />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleStates }
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleButtonMovie }
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
  onClick: 'Insert Function',
};

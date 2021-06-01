// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelTitle from './LabelTitle';
import LabelSubtitle from './LabelSubtitle';
import LabelImagePath from './LabelImagePath';
import LabelStoryLine from './LabelStoryline';
import LabelRating from './LabelRating';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = stateInitial;
    this.addState = this.addState.bind(this);
    this.handleChangeOnclick = this.handleChangeOnclick.bind(this); // **
  }

  handleChangeOnclick() {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state);
    this.setState(stateInitial);
  }

  addState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle change={ this.addState } value={ title } />
        <LabelSubtitle change={ this.addState } value={ subtitle } />
        <LabelImagePath change={ this.addState } value={ imagePath } />
        <LabelStoryLine change={ this.addState } value={ storyline } />
        <LabelRating change={ this.addState } value={ rating } />
        <label htmlFor="genreOption" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.addState }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleChangeOnclick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

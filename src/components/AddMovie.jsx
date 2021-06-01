import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelTitle from './LabelTitle';
import LabelSubtitle from './LabelSubtitle';
import LabelImage from './LabelImage';
import LabelTextarea from './LabelTextarea';
import LabelNumber from './LabelNumber';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.addState = this.addState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state);
    this.setState(initialState);
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
        <LabelTitle functionChange={ this.addState } value={ title } />
        <LabelSubtitle functionChange={ this.addState } value={ subtitle } />
        <LabelImage functionChange={ this.addState } value={ imagePath } />
        <LabelTextarea functionChange={ this.addState } value={ storyline } />
        <LabelNumber functionChange={ this.addState } value={ rating } />
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input-label"
            onChange={ this.addState }
            value={ genre }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
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

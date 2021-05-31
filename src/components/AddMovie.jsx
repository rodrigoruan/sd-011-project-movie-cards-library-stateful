import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelTitle from './LabelTitle';
import LabelSubtitle from './LabelSubtitle';
import LabelImage from './LabelImage';
import LabelTextarea from './LabelTextarea';
import LabelNumber from './LabelNumber';

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
    this.addState = this.addState.bind(this);
  }

  addState({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  input() {
    return {

    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle functionChange={ addState } value={ title } />
        <LabelSubtitle functionChange={ addState } value={ subtitle } />
        <LabelImage functionChange={ addState } value={ imagePath } />
        <LabelTextarea functionChange={ addState } value={ storyline } />
        <LabelNumber functionChange={ addState } value={ rating } />
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select id="genre-input-label" onChange={ addState } value={ genre }>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
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

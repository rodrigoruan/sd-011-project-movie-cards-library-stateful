// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
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
      genre: 'action',
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelTitle change={ this.handleChange } value={ title } />
        <LabelSubtitle change={ this.handleChange } value={ subtitle } />
        <LabelImagePath change={ this.handleChange } value={ imagePath } />
        <LabelStoryLine change={ this.handleChange } value={ storyline } />
        <LabelRating change={ this.handleChange } value={ rating } />
        <label htmlFor="genreOption" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            id="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

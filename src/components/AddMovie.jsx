import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // Pedi ajuda na sala "A"
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ this.state.title } handleChange={ this.handleChange } />
        <Subtitle value={ this.state.subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ this.state.ImagePath } handleChange={ this.handleChange } />
        <Storyline value={ this.state.Storyline } handleChange={ this.handleChange } />
        
        <label data-testid="rating-input-label" htmlFor="addMovieRating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            id="addMovieRating"
            name="rating"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

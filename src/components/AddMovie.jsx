import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';
import LabelRating from './Labels/LabelRating';
import LabelGenre from './Labels/LabelGenre';
import Label from './Labels/Label';

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
    this.addMovieToList = this.addMovieToList.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addMovieToList(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form-box">
        <Label
          textcall="Título"
          inputName="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Subtítulo"
          inputName="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Sinopse"
          inputName="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Label
          textcall="Imagem"
          inputName="image"
          value={ image }
          handleChange={ this.handleChange }
        />
        <LabelRating rating={ rating } handleChange={ this.handleChange } />
        <LabelGenre genre={ genre } handleChange={ this.handleChange } />
        <ButtonAddMovie onClick={ () => this.addMovieToList(onClick) } />
      </form>
    );
  }
}

// https://www.pluralsight.com/guides/how-to-send-state-of-current-component-as-a-parameter-to-another-external-method-using-react
// https://forum.betrybe.com/t/projeto-movie-cards-library-stateful-requisito-14/879
// https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/
// https://javascript.plainenglish.io/creating-a-generic-text-input-component-with-react-886e0cf90016
// https://css-tricks.com/demonstrating-reusable-react-components-in-a-form/

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

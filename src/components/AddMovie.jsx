import React from 'react';
// import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Image from './Image';
import TextArea from './TextArea';
import InputRating from './InputRating';
import Genre from './Genre';
import AddButton from './AddButton';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this); // o bind passa o this para a função handleChange
  }

  handleChange(event) { // revisar essa função
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  newMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleID">
          Título
          <input
            value={ title }
            type="text"
            id="titleID"
            name="title"
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <AddButton newMovie={ this.newMovie } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

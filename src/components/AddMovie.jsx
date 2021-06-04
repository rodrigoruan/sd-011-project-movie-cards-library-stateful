import React from 'react';
import PropTypes from 'prop-types';
import LableImage from './LableImage';
import LableRating from './LableRating';
import LableSinopse from './LableSinopse';
import LableSubtitle from './LableSubtitle';
import LableTitle from './LableTitle';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonClick() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LableTitle title={ title } handleChange={ this.handleChange } />
        <LableSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <LableImage image={ imagePath } handleChange={ this.handleChange } />
        <LableSinopse storyline={ storyline } handleChange={ this.handleChange } />
        <LableRating rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />

        <button
          data-testid="send-button"
          onClick={ this.buttonClick }
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

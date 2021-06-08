import React from 'react';
import PropTypes from 'prop-types';
import AddGenre from './AddGenre';
import AddImage from './AddImage';
import AddRating from './AddRating';
import AddSinopse from './AddSinopse';
import AddSubtitle from './AddSubtitle';
import AddTitle from './AddTitle';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = stateInitial;

    this.handleChange = this.handleChange.bind(this);

    this.resetState = this.resetState.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    });
  }

  resetState = () => {
    this.setState(stateInitial);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <AddTitle title={ title } handleChange={ this.handleChange } />

        <AddSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />

        <AddImage imagePath={ imagePath } handleChange={ this.handleChange } />

        <AddSinopse storyline={ storyline } handleChange={ this.handleChange } />

        <AddRating rating={ rating } handleChange={ this.handleChange } />

        <AddGenre genre={ genre } handleChange={ this.handleChange } />

        <button
          data-testid="send-button"
          type="button"
          onClick={ () => {
            onClick();
            this.resetState();
          } }
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

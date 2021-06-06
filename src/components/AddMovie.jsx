import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import Image from './AddMovie/Image';
import Sinopse from './AddMovie/Sinopse';
import RatingInput from './AddMovie/RatingInput';
import Genre from './AddMovie/Genre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSinopse = this.handleChangeSinopse.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
  }

  handleChangeTitle(event) {
    const { target } = event;
    this.setState({
      title: target.value,
    });
  }

  handleChangeSubtitle(event) {
    const { target } = event;
    this.setState({
      subtitle: target.value,
    });
  }

  handleChangeImage(event) {
    const { target } = event;
    this.setState({
      imagePath: target.value,
    });
  }

  handleChangeSinopse(event) {
    const { target } = event;
    this.setState({
      storyline: target.value,
    });
  }

  handleChangeRating(event) {
    const { target } = event;
    this.setState({
      rating: target.value,
    });
  }

  handleChangeGenre(event) {
    const { target } = event;
    this.setState({
      genre: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChangeTitle } />
          <Subtitle value={ subtitle } handleChange={ this.handleChangeSubtitle } />
          <Image value={ imagePath } handleChange={ this.handleChangeImage } />
          <Sinopse value={ storyline } handleChange={ this.handleChangeSinopse } />
          <RatingInput value={ rating } handleChange={ this.handleChangeRating } />
          <Genre value={ genre } handleChange={ this.handleChangeGenre } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }),
};

AddMovie.defaultProps = {
  state: {},
};

export default AddMovie;

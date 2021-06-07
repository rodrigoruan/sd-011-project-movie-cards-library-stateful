import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import Image from './AddMovie/Image';
import Sinopse from './AddMovie/Sinopse';
import RatingInput from './AddMovie/RatingInput';
import Genre from './AddMovie/Genre';
import ButtonInput from './AddMovie/ButtonInput';

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
    this.functionOnClick = this.functionOnClick.bind(this);
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

  functionOnClick(currentState) {
    currentState(this.state); // callback que recebe como parâmetro e armazena o estado atual de movieCard

    this.setState({ // lógica para reset do estado de movieCard
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props; // props criada para passar a callback como parâmetro da functionOnclick
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
          <ButtonInput onClick={ () => this.functionOnClick(onClick) } />
        </form>
      </div>
    );
  }
}

// Referência para buttonInput: https://www.w3schools.com/react/react_events.asp
// Linha 100: a props do ButtonInput é a callback parâmetro da função que captura os dados do estado e reseta eles depois.

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;

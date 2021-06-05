// implement AddMovie component here
import React, { Component } from 'react';
import Image from './AddMovieComponents/Image';
import SubTitle from './AddMovieComponents/SubTitle';
import Title from './AddMovieComponents/Title';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';

export default class AddMovie extends Component {
  constructor() {
    super();

    // this.state = {
    //   genre: 'action',
    // };

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log('Abaixo temos o this');
    console.log(this);
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <Title defaultValue={ title } onChange={ this.changeState } />
          <SubTitle defaultValue={ subtitle } onChange={ this.changeState } />
          <Image defaultValue={ imagePath } onChange={ this.changeState } />
          <Storyline defaultValue={ storyline } onChange={ this.changeState } />
          <Rating defaultValue={ rating } onChange={ this.changeState } />
        </form>
      </div>
    );
  }
}

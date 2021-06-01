import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './depComponents/Title';
import Subtitle from './depComponents/Subtitle';
import Image from './depComponents/Image';
import Storyline from './depComponents/Storyline';
import Rating from './depComponents/Rating';
import Select from './depComponents/Select';
import Button from './depComponents/Button';

export default class AddMovie extends Component {
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

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />

          <Subtitle value={ subtitle } handleChange={ this.handleChange } />

          <Image value={ imagePath } handleChange={ this.handleChange } />

          <Storyline value={ storyline } handleChange={ this.handleChange } />

          <Rating value={ rating } handleChange={ this.handleChange } />

          <Select value={ genre } handleChange={ this.handleChange } />

          <Button
            onClick={ () => {
              onClick(this.state);
              this.reset();
            } }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

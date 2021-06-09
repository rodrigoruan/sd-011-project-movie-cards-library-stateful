import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',

    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.handleInputChange }
            data-testid="title-input"
          />
        </label>
      </form>

    );
  }
}

AddMovie.prototype = {
  onClick: PropTypes.func.isRequired,
};

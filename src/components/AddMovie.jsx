import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Título
          <input
            onChange={ this.changeState }
            name="title"
            data-testid="title-input"
            value={ this.title }
            id="title"
          />
        </label>
      </form>
    );
  }
}

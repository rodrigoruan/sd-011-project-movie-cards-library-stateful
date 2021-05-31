import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeValues = this.changeValues.bind(this);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: action,
    });
  }

  changeValues(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ this.state.title }
            onChange={ this.changeValues() }
          >

        </label>
      </form>
    );
  }
}

export default AddMovie;

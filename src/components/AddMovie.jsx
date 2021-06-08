// implement AddMovie component here
import React, { Component } from 'react';
import Form from './Form.jsx';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleInputs = this.handleInputs.bind(this);
    this.addMovieBtn = this.addMovieBtn.bind(this);
  }

  handleInputs({ target }) {
    
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovieBtn() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <Form state={this.state} func={this.handleInputs} addMovie={this.addMovieBtn} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import InputText8 from './components/InputText8';
import InputText9 from './components/InputText9';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      title: value,
      subtitle: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <InputText8 srtTxt={ this.title } srcOnCh={ this.handleChange } />
        <InputText9 srtTxt={ this.subtitle } srcOnCh={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

// AddMovie.propTypes = {
//   slVl: PropTypes.string.isRequired,
//   evSl: PropTypes.func.isRequired,
// };

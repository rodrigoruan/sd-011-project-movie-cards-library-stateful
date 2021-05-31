import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputText8 from './components/InputText8';
import InputText9 from './components/InputText9';
import InputText10 from './components/InputText10';
import TextArea from './components/InputText11';
import InputText12 from './components/InputText12';
import SelectList13 from './components/SelectList13';

class AddMovie extends Component {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText8 srtTxt={ title } srcOnCh={ this.handleChange } />
        <InputText9 srtTxt={ subtitle } srcOnCh={ this.handleChange } />
        <InputText10 srtTxt={ imagePath } srcOnCh={ this.handleChange } />
        <TextArea srtTxt={ storyline } srcOnCh={ this.handleChange } />
        <InputText12 srtTxt={ rating } srcOnCh={ this.handleChange } />
        <SelectList13 srtTxt={ genre } srcOnCh={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

// AddMovie.propTypes = {
//   slVl: PropTypes.string.isRequired,
//   evSl: PropTypes.func.isRequired,
// };

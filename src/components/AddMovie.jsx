// implement AddMovie component here

import React from 'react';
// import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Image from './Image';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: '0',
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this); // o bind passa o this para a função handleChange
  }

  handleChange(event) { // revisar essa função
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleID">
          Título
          <input
            value={ title }
            type="text"
            id="titleID"
            name="title"
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          labelText="Título"
          labelDataTestId="title-input-label"
          inputType="text"
          inputName="title"
          inputValue={ title }
          inputOnChange={ this.handleChange }
          inputDataTestId="title-input"
        />
        {
          subtitle + title + imagePath + storyline + rating + genre
        }
      </form>
    );
  }
}

export default AddMovie;

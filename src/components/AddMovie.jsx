import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const value = ( target.type === 'checkbox' ) ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    })
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            <span>Título</span>

            <input
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

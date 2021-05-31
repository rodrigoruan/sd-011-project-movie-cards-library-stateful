import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.hadleState = this.hadleState.bind(this);
  }

  hadleState({ target }) {
    const { name, value } = target;
    console.log(target);
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="inputAddMovie"
            data-testid="title-input-label"
          >
            Título
            <input
              onChange={ this.hadleState }
              data-testid="title-input"
              id="inputAddMovie"
              type="text"
              defaultValue={ title }
              name="title"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

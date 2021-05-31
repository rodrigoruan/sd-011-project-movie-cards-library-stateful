// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  render() {
    const { callback } = this.props;
    return (
      <form>
        <label htmlFor="i2" data-testid="add-movie-form">
          <input />
        </label>
      </form>
    );
  }
}
export default AddMovie;

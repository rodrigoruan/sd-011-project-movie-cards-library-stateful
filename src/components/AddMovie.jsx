import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyPath: "",
      rating: 0,
      genre: "action",
    };
  }

  render() {
    return (
      <form>
        test
      </form>
    );
  }
}

export default AddMovie;

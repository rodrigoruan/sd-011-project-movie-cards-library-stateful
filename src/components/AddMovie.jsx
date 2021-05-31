import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        
      </form>
    )
  }
}

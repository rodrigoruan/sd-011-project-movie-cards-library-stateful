import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // movies: this.props.movies,
    };
  }

  render() {
    const { title } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="inputName" data-testid="title-input-label">
          Título
          <input
            id="inputName"
            type="text"
            onChange={ handleChange }
            data-testid="title-input"
            defaulValue={ title }
          />
        </label>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

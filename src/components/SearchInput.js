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
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="inputName" data-testid="title-input-label">
          Título
          <input
            id="inputName"
            type="text"
            onChange={ onSearchTextChange }
            data-testid="title-input"
            defaulvalue={ title }
          />
        </label>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onSearchTextChange: PropTypes.string.isRequired,
};

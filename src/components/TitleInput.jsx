import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { title, handleState } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default TitleInput;

TitleInput.propTypes = {
  title: PropTypes.string,
  handleState: PropTypes.func,
};

TitleInput.defaultProps = {
  title: '',
  handleState: () => {},
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelTitle extends Component {
  render() {
    const { title, handleStates } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelTitle;

LabelTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleStates: PropTypes.func,
};

LabelTitle.defaultProps = {
  handleStates: 'Insert handleStates Function',
};

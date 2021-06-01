import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { stateModify, title } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          value={ title }
          name="title"
          data-testid="title-input"
          onChange={ stateModify }
        />
      </label>
    );
  }
}

export default InputTitle;

InputTitle.propTypes = {
  stateModify: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

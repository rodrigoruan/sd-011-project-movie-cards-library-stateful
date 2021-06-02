import React from 'react';
import propTypes from 'prop-types';

class InputFile extends React.Component {
  render() {
    const { title, targetValue } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ targetValue }
        />
      </label>
    );
  }
}

export default InputFile;

InputFile.propTypes = {
  title: propTypes.string.isRequired,
  targetValue: propTypes.string.isRequired,
};

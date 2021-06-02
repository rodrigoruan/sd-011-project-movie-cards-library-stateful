import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleValue } = this.props;

    return (
      <label htmlFor="ex8" data-testid="title-input-label">
        Título
        <input
          id="ex8"
          type="text"
          value={ title }
          data-testid="title-input"
          name="title"
          onChange={ handleValue }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string,
  handleValue: PropTypes.func,
};

InputTitle.defaultProps = {
  title: '',
  handleValue: null,
};

export default InputTitle;
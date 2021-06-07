import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title input" data-testid="title-input-label">
        Título
        <input
          className="addMovie-inputs"
          type="text"
          name="title"
          value={ value }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Title.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default Title;

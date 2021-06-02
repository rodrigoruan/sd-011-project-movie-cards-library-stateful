import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="label-title" data-testid="title-input-label">
        Título
        <input
          className="addMovie-inputs"
          type="text"
          name="title"
          title={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
};

Title.defaultProps = {
  title: '',
  handleChange: () => {},
};

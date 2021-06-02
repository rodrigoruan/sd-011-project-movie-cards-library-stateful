import React from 'react';
import PropTypes from 'prop-types';

class LabelTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
          className="input-box"
        />
      </label>
    );
  }
}

LabelTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelTitle;

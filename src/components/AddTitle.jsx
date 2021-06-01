import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { handleTitle, title } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name=""
          id=""
          value={ title }
          data-testid="title-input"
          onChange={ handleTitle }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddTitle;

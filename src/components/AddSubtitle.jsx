import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { handleSubtitle, subtitle } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name=""
          id=""
          value={ subtitle }
          data-testid="title-input"
          onChange={ handleSubtitle }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  handleSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddSubtitle;

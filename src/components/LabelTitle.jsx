import React from 'react';
import PropTypes from 'prop-types';

class LabelTitle extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          onChange={ title }
          data-testid="title-input"
        />
      </label>
    );
  }
}

LabelTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LabelTitle;

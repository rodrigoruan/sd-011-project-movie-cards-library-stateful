import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleSubtitle extends Component {
  render() {
    const { title, subtitle, chg } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ chg }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ chg }
          />
        </label>
      </div>
    );
  }
}
export default TitleSubtitle;

TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  chg: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };

    this.textInputTitle = this.textInputTitle.bind(this);
    this.textInputSubtitle = this.textInputSubtitle.bind(this);
  }

  textInputTitle({ target }) {
    this.setState({ title: target.value });
  }

  textInputSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { onClick }
          <label htmlFor="input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              onChange={ this.textInputTitle }
              value={ title }
            />
          </label>
          <label htmlFor="input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              onChange={ this.textInputSubtitle }
              value={ subtitle }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

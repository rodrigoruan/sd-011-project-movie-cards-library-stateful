import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      /* imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
  }

  handleChangeTitle(e) {
    return setState({
      title: e.target.value,
    });
  }

  handleChangeSubtitle(e) {
    return setState({
      subtitle: e.target.value,
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="input-title" data-testid="title-input-label">
            Título
            <input
              id="input-title"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChangeTitle }
            />
          </label>

          <label htmlFor="input-sutitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="input-sutitle"
              type="text"
              value={ subtitle }
              data-testid="sutitle-input"
              onChange={ this.handleChangeSubtitle }
            />
          </label>
        </form>
      </div>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

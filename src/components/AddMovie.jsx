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

  handleChange(e, att) {
    this.setState({
      [att]: e.target.value,
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle, imagePath } = this.state;

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
              onChange={ ((e) => this.handleChange(e, "title")) }
            />
          </label>

          <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="input-subtitle"
              type="text"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ ((e) => this.handleChange(e, "subtitle")) }
            />
          </label>

          {/* <label htmlFor="input-subtitle" data-testid="image-input-label">
            Imagem
            <input
              id="input-subtitle"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChangeURL }
            />
          </label> */}
        </form>
      </div>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

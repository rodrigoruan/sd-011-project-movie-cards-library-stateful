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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, func) => {
    switch (func) {
    case 'title':
      setState({
        title: e.target.value,
      });
      break;
    case 'subtitle':
      this.setState({
        subtitle: e.target.value,
      });
      break;
    default:
      console.log('Erro no sistema de alguém que me configurou');
    }
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
              onChange={ (e) => this.handleChange(e, title) }
            />
          </label>

          <label htmlFor="input-sutitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="input-sutitle"
              type="text"
              value={ subtitle }
              data-testid="sutitle-input"
              onChange={ (e) => this.handleChange(e, subtitle) }
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

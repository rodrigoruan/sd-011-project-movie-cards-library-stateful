// implement AddMovie component here

// 6 - Crie um componente chamado <AddMovie />

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleOnchangeTitle = this.handleOnchangeTitle.bind(this);
    this.handleOnchangeSubtitle = this.handleOnchangeSubtitle.bind(this);
    this.handleOnchangeImagePath = this.handleOnchangeImagePath.bind(this);
    this.handleOnchangeStoryline = this.handleOnchangeStorylineq.bind(this);
  }

  handleOnchangeTitle({ target }) {
    this.setState({
      title: target.value,
    });
  }

  handleOnchangeSubtitle({ target }) {
    this.setState({
      subtitle: target.value,
    });
  }

  handleOnchangeImagePath({ target }) {
    this.setState({
      imagePath: target.value,
    });
  }

  handleOnchangeStoryline({ target }) {
    this.setState({
      storyline: target.value,
    });
  }

  // handleState(e, property) {
  //   this.setState({
  //     [property]: target.value
  //   })
  // }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      // 7 - Renderize um formulário dentro de <AddMovie />
      <form data-testid="add-movie-form">
        {/* 8 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
        <label data-testid="title-input-label" htmlFor="">Título</label>
        <input type="text" value={ title } onChange={ handleOnchangeTitle } />
        {/* 9 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
        <label data-testid="subtitle-input-label" htmlFor="">Subtitulo</label>
        <input data-testid="subtitle-input" type="text" value={ subtitle } onChange={ this.handleOnchangeSubtitle } />
        <label data-testid="title-input-label" htmlFor="">Título</label>
        <input data-testid="image-input" type="text" value={ imagePath } onChange={ handleOnchangeTitle } />
        <label data-testid="storyline-input-label" htmlFor="">Sinopse</label>
        <textarea data-testid="storyline-input" cols="30" rows="10" onChange={ this.handleOnchangeStoryline } />
        { storyline }
      </form>
    );
  }
}

export default AddMovie;

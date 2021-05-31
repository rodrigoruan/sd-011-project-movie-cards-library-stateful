import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePatch: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = { ...this.state };
    this.modifyState = this.modifyState.bind(this);
  }

  modifyState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      // imagePatch,
      // storyLine,
      // rating,
      // genre
    } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="add-title" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              id="add-title"
              value={ title }
              data-testid="title-input"
              onChange={ this.modifyState }
            />
          </label>

          <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              id="add-subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.modifyState }
            />
          </label>
        </form>
      </div>
    );
  }
}
